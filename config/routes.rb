Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :follows, only: [:create]
    end
    resources :follows, only: [:destroy]
    resource :session, only: [:create, :destroy]

    resources :questions, only: [:create, :show, :destroy, :update]  do 
      resources :answers, only: [:create, :index]
      resources :question_follows, only: [:create]
    end
    resources :question_follows, only: [:destroy]
    resources :answers, only: [:show, :destroy, :update] do
      resources :comments, only: [:create, :index]
    end

    resources :comments, only: [:show, :update, :destroy]

    resources :topics, only: [:index, :show, :create, :destroy] do 
      resources :questions, only: [:index]
      resources :topic_follows, only: [:create]
    end
    resources :topic_follows, only: [:destroy]
  end

  # custom apis
  ## questions
  get '/questions/:questions_id/getRelatedQuestions' to: 'questions#handle_get_related_questions'
  get '/questions/:questions_id/getBestAnswer' to: 'questions#handle_get_best_answer'
  get '/questions/:questions_id/getFollowers' to: 'questions#handle_get_followers'

  ## users
  get '/users/:user_id/getFollowers' to: 'users#handle_get_followers'

  ## topics
  get '/topics/:topic_id/getFollowers' to: 'topics#handle_get_followers'

  root to: "static_pages#root"
end

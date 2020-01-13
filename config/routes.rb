Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :follows, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]

    resources :questions, only: [:create, :show, :destroy, :update]  do 
      resources :answers, only: [:create, :index]
      resources :question_follows, only: [:create, :destroy]
    end
    resources :answers, only: [:show, :destroy, :update] do
      resources :comments, only: [:create, :index]
    end

    resources :comments, only: [:show, :update, :destroy]

    resources :topics, only: [:index, :show, :create, :destroy] do 
      resources :questions, only: [:index]
      resources :topic_follows, only: [:create, :destroy]
    end

    # custom apis
    ## session
    get '/session/google_login', to: 'sessions#handle_google_login'
    get '/session/demo_login', to: 'sessions#handle_demo_login'

    ## questions
    get '/most_recent_questions', to: 'questions#handle_get_new_questions'
    get '/questions/:questions_id/getRelatedQuestions', to: 'questions#handle_get_related_questions'
    get '/questions/:questions_id/getBestAnswer', to: 'questions#handle_get_best_answer'
    get '/questions/:questions_id/getFollowers', to: 'questions#handle_get_followers'

    ## users
    get '/users/:user_id/getFollowers', to: 'users#handle_get_followers'

    ## topics
    get '/topics/:topic_id/getFollowers', to: 'topics#handle_get_followers'

  end


  root to: "static_pages#root"
end

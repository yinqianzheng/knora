Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :subscribers, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]

    resources :questions, only: [:index, :create, :show, :destroy, :update]  do 
      resources :answers, only: [:create, :index]
      resources :watchers, only: [:create, :destroy]
    end
    resources :answers, only: [:show, :destroy, :update] do
      resources :comments, only: [:create, :index]
      resources :votes, only: [:create, :destroy]
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
    get '/search', to: 'questions#handle_search'
    get '/topic/:id', to: 'questions#handle_get_topic_questions'

    ## users
    get '/users/:user_id/getFollowers', to: 'users#handle_get_followers'
    get '/users/:user_id/getWatchList', to: 'users#handle_get_watch_list'
    get '/users/:user_id/getVoteList', to: 'users#handle_get_vote_list'


    ## topics
    get '/topics/:topic_id/getFollowers', to: 'topics#handle_get_followers'

  end


  root to: "static_pages#root"
end

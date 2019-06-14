Rails.application.routes.draw do
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :paintings, only: [:index]
    
    end
  end
end

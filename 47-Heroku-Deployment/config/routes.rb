Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :notes
      resources :users
    end
  end

get '*path', to: "application#react_app", constraints: ->(request) do
	!request.xhr? && request.format.html?
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :corgis

  # get '/corgis/:id', to: "corgis#show", as: :my_corgi
  # , only: [:index, :show, :new, :create, :edit, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

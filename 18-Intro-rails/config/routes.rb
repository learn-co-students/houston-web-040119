Rails.application.routes.draw do
  resources :dogs, only: [:index, :show, :new]

  # get 'dogs/all_dogs', to: 'dogs#index', as: 'dog'

  # get 'dogs/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

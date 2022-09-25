Rails.application.routes.draw do
  resources :locations
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Route to test Rails configuration:
  get '/hello', to: 'application#hello_world'

  # Handle all client-side route requests:
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

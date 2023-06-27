Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show, :index]
      post "/login", to: "users#login"
      get "/me", to: "users#me"
      get "/my-tours", to: "tours#index_all"
      resources :tours, except: [:new, :edit, :destroy]
      resources :reservations, only: [:create, :show, :index]
    end
  end
end

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'hello#index' # equals get'/' => 'hello#index' here index comes from controler hello
  get '/hello/' => 'hello#demo'
end

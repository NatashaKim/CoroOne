Rails.application.routes.draw do
  resources :projects
  resources :post_types
  resources :follows
  resources :categories
  # resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users
  post 'users/:id/edit', to: "users#update"
  get 'users/:id/getuser', to: "users#getuser"
  post 'users/:id/delete', to: "users#delite"
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
  post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"
  # get 'about/index'
  # get 'promo/index'
resources :posts do
    collection do
      get :newshit
      get :newarticles
      get :newnews
      get :newpuzzles
      get :newreviews
      get :newportfolio
      get :newevents
      get :newnecrology
    end
    resources :answers
    resources :comments
    resources :likes
    resources :favorites
end
  resources :subscribers
  get 'posts/index'

  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'
  get 'admin_context', to: 'admin_context#index'
  root 'promo#index'

  get "search", to: "search#search"

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  get 'users/:id/edit' => 'users#edit'
  delete 'users/:id', to: 'users#destroy'
  get 'users/:id/following', :to => "users#following", :as => :following

  resources :projects do
      resources :developers
  end
  # delete 'comments/:id', to: 'comments#destroy'
  # root 'posts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

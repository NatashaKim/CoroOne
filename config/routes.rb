Rails.application.routes.draw do
  resources :post_types
  resources :follows
  resources :categories
  # resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users
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
      get :newdiscussion
      get :newportfolio
      get :newevents
    end
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

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'
  get 'users/:id/following', :to => "users#following", :as => :following
  # root 'posts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

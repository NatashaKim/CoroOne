Rails.application.routes.draw do
  resources :projects
  resources :post_types
  resources :follows
  resources :categories
  resources :genres
  # resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users
  post 'users/:id/edit', to: "users#update"
  post 'posts/:id', to: "posts#update"
  get 'users/:id/getuser', to: "users#getuser"
  get 'post_types/:id/getpost_type', to: "post_types#getpost_type"
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

  get '/posts/hashtag/:name', to: 'posts#hashtags'

  get '/posts_by_type/:post_type_id/count/:count', to: "posts#get_posts_by_type"

  get '/posts_by_type_and_genre/:post_type_id/genre/:genre', to: "posts#get_posts_by_type_and_genre"

  get '/posts_by_type_and_user/:post_type_id/user/:user_id', to: "posts#get_posts_by_type_and_user"

  get '/projects_by_user/:user_id', to: "projects#get_projects_by_user"

  get '/newest_projects', to: "projects#get_newest_projects"

  get '/posts_by_category/:post_type_id/category/:category_id', to: "posts#get_posts_by_category"

  get '/posts/by_type/:name', to:"posts#post_type_page"


  # get `/your/api/namespace/endpoint/:withDynamicString/:forParams`, to: "posts#upload_image"

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  get 'users/:id/edit' => 'users#edit'
  post 'posts/:id' => 'posts#edit'
  delete 'users/:id', to: 'users#destroy'
  get 'users/:id/following', :to => "users#following", :as => :following

  resources :projects do
      resources :developers
  end
  # delete 'comments/:id', to: 'comments#destroy'
  # root 'posts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

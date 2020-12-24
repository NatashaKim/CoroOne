class AdminContextController < ApplicationController



  def index
    @categories = Category.all
    @users = User.all
    @comments = Comment.all
    @pt=PostType.all
    @user = User.find(current_user.id)

    @posts = Post.all

    if params.has_key?(:post_type)
      @pt = PostType.find_by_name(params[:post_type])
      @posts = @posts.where(post_type: @pt)
    end

    if params.has_key?(:category)
      @category = Category.find_by_name(params[:category])
      @posts = @posts.where(category: @category)
    end

    if params.has_key?(:user)
      @user = User.find_by_username(params[:user])
      @posts = @posts.where(user: @user)
    end

if params.has_key?(:posts)
  @whatcontenttoshow = "show-posts"
elsif params.has_key?(:categories)
  @whatcontenttoshow = "show-categories"
elsif  params.has_key?(:users)
  @whatcontenttoshow="show-users"
elsif params.has_key?(:comments)
  @whatcontenttoshow = "show-comments"
end


    @hascat=params.has_key?(:somefilter)
    if @hascat
      @cat = Category.all
    end

    render 'index'
  end




  layout 'admin_context'
end

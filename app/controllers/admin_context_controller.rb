class AdminContextController < ApplicationController



  def index
    @categories = Category.all
    @users = User.all
    @comments = Comment.all
    @pt=PostType.all
    @user = current_user

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
      @user_for_filter = User.find_by_username(params[:user])
      @posts = @posts.where(user: @user_for_filter)
    end

if params.has_key?(:curatorposts)
  @whatcontenttoshow = "show-posts"
  @news = PostType.find_by_name("news")
  @events = PostType.find_by_name("events")
  @articles = PostType.find_by_name("articles")
  @reviews = PostType.find_by_name("reviews")
  @posts = @posts.where(post_type: [@news, @events, @articles, @reviews])
  @iwanttoshowbuttonattheright=true


elsif params.has_key?(:posts)

  if params[:post_type] == "portfolio"
    @whatcontenttoshow="show-portfolio"
  elsif params[:post_type] == "discussion"
    @whatcontenttoshow="show-discussion"
  elsif params[:post_type] == "puzzles"
    @whatcontenttoshow="show-puzzles"
  else
    @whatcontenttoshow = "show-posts"
  end


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

@post_type_from_clinet = params[:post_type]

    render 'index'
  end




  layout 'admin_context'
end

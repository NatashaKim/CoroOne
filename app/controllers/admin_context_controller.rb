class AdminContextController < ApplicationController



  def index
    @posts = Post.all
    @categories = Category.all
    @users = User.all
    @comments = Comment.all
    @pt=PostType.all
    @user = User.find(current_user.id)

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

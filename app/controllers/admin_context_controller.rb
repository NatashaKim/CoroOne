class AdminContextController < ApplicationController



  def index
    @posts = Post.all
    @categories = Category.all
    @users = User.all
    @comments = Comment.all
    @pt=PostType.all
    @user = User.find(current_user.id)

    @hascat=params.has_key?(:somefilter)
    if @hascat
      @cat = Category.all
    end

    render 'index'
  end




  layout 'admin_context'
end

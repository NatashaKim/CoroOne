class UsersController < ApplicationController
before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
  end

  def show
    @genres = Genre.all
    @user = User.find(params[:id])
    if @user
      render actions: :show
      @favorites = @user.favorites.all
    else
        render file: 'public/404', status: 404, formats: [:html]
    end
  end

  def getuser
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
        render file: 'public/404', status: 404, formats: [:html]
    end
  end

  def edit
    render 'users/edit'
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'Пользователь was successfully переназначен.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def favorited?(post)
    favorites.find_by(post_id: post.id).present?
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path, notice: 'User deleted.'
  end

  def follow
    @user = User.find(params[:id])
    current_user.followees << @user
    redirect_back(fallback_location: user_path(@user))
  end

  def unfollow
    @user = User.find(params[:id])
    current_user.followed_users.find_by(followee_id: @user.id).destroy
    redirect_back(fallback_location: user_path(@user))
  end

  def following
    @user = User.find(params[:id])
    if @user
      @follow = @user.followed_users
      render actions: :show
      @following = @user.followees.all
    end
  end

  def favorites
    @genres = Genre.all
    @user = User.find(params[:id])
     if @user
       @posts = @user.favorited_posts
       render actions: :show
       @favorites = @user.favorites.all
     else
        render file: 'public/404', status: 404, formats: [:html]
    end
  
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end
  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:username, :email, :image, :admin, :ismoderator, :isdeveloper, :password, :account_cover)
  end

end

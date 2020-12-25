class PostsController < ApplicationController
  # http_basic_authenticate_with :name => "admin", :password => "superstrongpassword", :except => [:index, :show]

  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /posts
  # GET /posts.json
  def index
    if params.has_key?(:category)
      @category = Category.find_by_name(params[:category])
      @posts = Post.where(category: @category)
    else
      @posts = Post.all
    end
  end

  #def current_user
  #  return unless session[:user_id]
  #  @current_user ||= User.find(session[:user_id])
  #end


  # GET /posts/1
  # GET /posts/1.json
  def show
    if @post.post_type.name == "puzzles"
      render 'showpuzzle'
    else
      render 'show'
    end
  end

  # GET /posts/new
  def new
    @post = Post.new
    @post.post_type = PostType.find_by_name("news")
  end

  def newnews
    @post = Post.new
    @post.post_type = PostType.find_by_name("news")
    @categories = ["Обновления","О компаниях"]
    render 'newnews'
  end

  def newarticles
    @post = Post.new
    @post.post_type = PostType.find_by_name("articles")
    @categories = ["Факты","Советы","Чит-коды"]
    render 'newarticles'
  end

  def newreviews
    @post = Post.new
    @post.post_type = PostType.find_by_name("reviews")
    @categories = ["Действие","Симулятор","Стратегия","Ролевая игра","Приключения","Головоломка"]
    render 'newreviews'
  end

  def newpuzzles
    @post = Post.new
    @post.post_type = PostType.find_by_name("puzzles")
    render 'newpuzzles'
  end

  def newdiscussion
    @post = Post.new
    @post.post_type = PostType.find_by_name("discussion")
    render 'newdiscussion'
  end

  def newportfolio
    @post = Post.new
    @post.post_type = PostType.find_by_name("portfolio")
    render 'newportfolio'
  end

  def newevents
    @post = Post.new
    @post.post_type = PostType.find_by_name("events")
    @categories = ["Анонсы","Релизы"]
    render 'newevents'
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params.merge(user_id: current_user.id))

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:name, :title, :author, :content, :image, :category_id, :post_type_id)
    end

    # layout 'posts'
end

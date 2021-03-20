class PostsController < ApplicationController
  # http_basic_authenticate_with :name => "admin", :password => "superstrongpassword", :except => [:index, :show]

  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /posts
  # GET /posts.json
  def index
    @categories = Category.all
    @post_types = PostType.all
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
    @categories = Category.all
    @category = Category.find(@post.category_id)
    @comment = Comment.new
    @comment.post_id = @post.id
    @comment.user = current_user
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
    @post.post_type = PostType.find_by_name("Новости")
    @categories = [{id:"5", name:"Обновления"}, {id:"6", name:"О компаниях"} ]
    render 'newnews'
  end

  def newarticles
    @post = Post.new
    @post.post_type = PostType.find_by_name("Статьи")
    @categories = [{id:"7", name:"Факты"}, {id:"8", name:"Советы"}, {id:"9", name:"Чит-коды"} ]
    render 'newarticles'
  end

  def newreviews
    @post = Post.new
    @post.post_type = PostType.find_by_name("Обзоры")
    @categories = [{id:"10", name:"Действие"}, {id:"11", name:"Симулятор"}, {id:"12", name:"Стратегия"}, {id:"13", name:"Ролевая игра"}, {id:"14", name:"Приключения"}, {id:"15", name:"Головоломка"} ]
    render 'newreviews'
  end

  def newnecrology
    @post = Post.new
    @post.post_type = PostType.find_by_name("Кладбище проектов")
    @categories = [{id:"10", name:"Действие"}, {id:"11", name:"Симулятор"}, {id:"12", name:"Стратегия"}, {id:"13", name:"Ролевая игра"}, {id:"14", name:"Приключения"}, {id:"15", name:"Головоломка"} ]
    render 'newnecrology'
  end

  def newpuzzles
    @post = Post.new
    @post.post_type = PostType.find_by_name("puzzles")
    render 'newpuzzles'
  end

  def newportfolio
    @post = Post.new
    @post.post_type = PostType.find_by_name("Мастерская")
    render 'newportfolio'
  end

  def newevents
    @post = Post.new
    @post.post_type = PostType.find_by_name("events")
    @categories = [{id:"3", name:"Анонсы"}, {id:"4", name:"Релизы"} ]
    render 'newevents'
  end

  def hashtags
    tag = Tag.find_by(name: params[:name])
    @posts = tag.posts
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
      params.require(:post).permit(:name, :title, :author, :content, :image, :category_id, :post_type_id, :project_id, :tag_id)
    end

    # layout 'posts'
end

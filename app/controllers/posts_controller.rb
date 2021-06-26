class PostsController < ApplicationController
  # http_basic_authenticate_with :name => "admin", :password => "superstrongpassword", :except => [:index, :show]

  before_action :set_post, only: [:show, :edit, :update, :destroy]
  #before_action :authenticate_user!, except: [:index, :show, :get_posts_by_type, :post_type_page, :get_posts_by_type_and_genre]

  # GET /posts
  # GET /posts.json
  def index
    # Image.all.each { |i| i.image.recreate_versions! }
    # Post.all.each {|x|x.image.recreate_versions!}

    @categories = Category.all
    @genres = Genre.all
    @post_types = PostType.all
    @posts = Post.all.includes(:category, :genres, :likes, :favorites, :post_type).map do
      |post|
      post.as_json(include: [:category, :genres, :image, :likes, :favorites, :post_type])
    end


    @posts = Post.where(nil)
    filtering_params(params).each do |key, value|
      @posts = @posts.public_send("filter_by_#{key}", value) if value.present?
    end
    # if params.has_key?(:category)
    #   @category = Category.find_by_name(params[:category])
    #   @posts = Post.where(category: @category).includes(:category, :likes, :favorites).map do
    #     |post|
    #     post.as_json(include: [:category, :image, :likes, :favorites])
    #   end
    #   #render json: @posts, include: [:category]
    # else
    #   @posts = Post.all.includes(:category, :likes, :favorites).map do
    #     |post|
    #     post.as_json(include: [:category, :image, :likes, :favorites])
    #   end
    #   #render json: { posts: @posts }
    # end
  end
  #def current_user
  #  return unless session[:user_id]
  #  @current_user ||= User.find(session[:user_id])
  #end

  def post_type_page
    @post_type = PostType.find_by_name(params[:name])
    @categories = Category.all
    @post_types = PostType.all
    @category = params[:category]

      @genres = Genre.where(post_type_id:@post_type.id)

    render "posttypepage"
  end


  def get_posts_by_type

      @posts = Post.where(post_type_id: params[:post_type_id])
      if(params[:category])
        @category=Category.where(name:params[:category])
        @posts=@posts.where(category_id: @category[0].id)
      end
      @posts=@posts.includes(:category, :genres, :likes, :post_type).limit(params[:count])
      @posts=@posts.map do
        |post|
        post.as_json(include: [:category, :genres, :image, :likes, :post_type])
      end
      render json: @posts
  end

  def get_posts_by_type_and_genre
    @post_id=GenreToSmth.where(genre_id: params[:genre].split(',')).select("post_id")
      @posts = Post
      .where(post_type_id: params[:post_type_id])
      .where(id: @post_id)
      .includes(:category, :genres).map do
        |post|
        post.as_json(include: [:category, :genres, :image])
      end
      render json: @posts
  end

  def get_posts_by_type_and_user
      @posts = Post
      .where(post_type_id: params[:post_type_id])
      .where(user_id: params[:user_id])
      .includes(:category, :genres).map do
        |post|
        post.as_json(include: [:category, :genres, :image, :likes])
      end
      render json: @posts
  end


  # GET /posts/1
  # GET /posts/1.json
  def show
    @categories = Category.all
    if params.has_key?(:category)
      @category = Category.find(@post.category_id)
    end
    @post_genres=GenreToSmth.select("genre_id").where(post_id:@post.id)
    @comment = Comment.new
    @comment.post_id = @post.id
    @comment.user = current_user
    if @post.post_type.name == "puzzles"
      render 'showpuzzle'
    elsif @post.post_type.name == "Мастерская"
     render 'showuserpost'
    elsif @post.post_type.name == "Кладбище проектов"
     render 'shownecrology'
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
    @categories = [{id:"1", name:"Анонсы"}, {id:"2", name:"Релизы"}, {id:"3", name:"Обновления"}, {id:"4", name:"О компаниях"} ]
    @genres = [{id:"1", name:"Экшен"}, {id:"2", name:"Адвенчура"}, {id:"3", name:"Казуальная"}, {id:"4", name:"Многопользовательская"}, {id:"5", name:"Гонки"}, {id:"6", name:"РПГ"}, {id:"7", name:"Симулятор"}, {id:"8", name:"Спортивная"}, {id:"9", name:"Стратегия"}, {id:"10", name:"Хоррор"}, {id:"11", name:"Бесплатная"}, {id:"12", name:"Визуальная новелла"}, {id:"13", name:"Настольная"}]
    render 'newnews'
  end

  def newarticles
    @post = Post.new
    @post.post_type = PostType.find_by_name("Статьи")
    @categories = [{id:"5", name:"Факты"}, {id:"6", name:"Советы"}, {id:"7", name:"Чит-коды"} ]
    @genres = [{id:"18", name:"Факт"}, {id:"19", name:"Совет"}, {id:"20", name:"Чит-код"}]
    render 'newarticles'
  end

  def newreviews
    @post = Post.new
    @post.post_type = PostType.find_by_name("Обзоры")
    @categories = [{id:"8", name:"Экшен"}, {id:"9", name:"Адвенчура"}, {id:"10", name:"Казуальная"}, {id:"11", name:"Многопользовательская"}, {id:"12", name:"Гонки"}, {id:"13", name:"РПГ"}, {id:"14", name:"Симулятор"}, {id:"15", name:"Спортивная"}, {id:"16", name:"Стратегия"}, {id:"17", name:"Хоррор"}, {id:"18", name:"Бесплатная"}, {id:"19", name:"Визуальная новелла"}, {id:"20", name:"Настольные"} ]
    @genres = [{id:"1", name:"Экшен"}, {id:"2", name:"Адвенчура"}, {id:"3", name:"Казуальная"}, {id:"4", name:"Многопользовательская"}, {id:"5", name:"Гонки"}, {id:"6", name:"РПГ"}, {id:"7", name:"Симулятор"}, {id:"8", name:"Спортивная"}, {id:"9", name:"Стратегия"}, {id:"10", name:"Хоррор"}, {id:"11", name:"Бесплатная"}, {id:"12", name:"Визуальная новелла"}, {id:"13", name:"Настольная"} ]
    render 'newreviews'
  end

  def newnecrology
    @post = Post.new
    @post.post_type = PostType.find_by_name("Кладбище проектов")
    @categories = [{id:"8", name:"Экшен"}, {id:"9", name:"Адвенчура"}, {id:"10", name:"Казуальная"}, {id:"11", name:"Многопользовательская"}, {id:"12", name:"Гонки"}, {id:"13", name:"РПГ"}, {id:"14", name:"Симулятор"}, {id:"15", name:"Спортивная"}, {id:"16", name:"Стратегия"}, {id:"17", name:"Хоррор"}, {id:"18", name:"Бесплатная"}, {id:"19", name:"Визуальная новелла"}, {id:"20", name:"Настольная"} ]
    @genres = [{id:"1", name:"Экшен"}, {id:"2", name:"Адвенчура"}, {id:"3", name:"Казуальная"}, {id:"4", name:"Многопользовательская"}, {id:"5", name:"Гонки"}, {id:"6", name:"РПГ"}, {id:"7", name:"Симулятор"}, {id:"8", name:"Спортивная"}, {id:"9", name:"Стратегия"}, {id:"10", name:"Хоррор"}, {id:"11", name:"Бесплатная"}, {id:"12", name:"Визуальная новелла"}, {id:"13", name:"Настольная"}]
    render 'newnecrology'
  end

  def newportfolio
    @post = Post.new
    @post.post_type = PostType.find_by_name("Мастерская")
    @projects = Project.where(user_id: current_user.id)
    render 'newportfolio'
  end

  def hashtags
    tag = Tag.find_by(name: params[:name])
    @posts = tag.posts
  end

  # GET /posts/1/edit
  def edit
    @post_genres=GenreToSmth.select("genre_id").where(post_id:@post.id)
    if @post.post_type.name == "Новости"
      @categories = [{id:"1", name:"Анонсы"}, {id:"2", name:"Релизы"}, {id:"3", name:"Обновления"}, {id:"4", name:"О компаниях"} ]
      @genres = [{id:"14", name:"Анонс"}, {id:"15", name:"Релиз"}, {id:"16", name:"Обновление"}, {id:"17", name:"О компаниях"} ]
      render 'newreviews'
    elsif @post.post_type.name == "Статьи"
      @categories = [{id:"5", name:"Факты"}, {id:"6", name:"Советы"}, {id:"7", name:"Чит-коды"} ]
      @genres = [{id:"18", name:"Факт"}, {id:"19", name:"Совет"}, {id:"20", name:"Чит-код"}]
    else
      @categories = [{id:"8", name:"Экшен"}, {id:"9", name:"Адвенчура"}, {id:"10", name:"Казуальная"}, {id:"11", name:"Многопользовательская"}, {id:"12", name:"Приключения"}, {id:"12", name:"Гонки"}, {id:"13", name:"РПГ"}, {id:"14", name:"Симулятор"}, {id:"15", name:"Спортивная"}, {id:"16", name:"Стратегия"}, {id:"17", name:"Хоррор"}, {id:"18", name:"Бесплатная"}, {id:"19", name:"Визуальная новелла"}, {id:"20", name:"Настольная"} ]
      @genres = [{id:"1", name:"Экшен"}, {id:"2", name:"Адвенчура"}, {id:"3", name:"Казуальная"}, {id:"4", name:"Многопользовательская"}, {id:"5", name:"Гонки"}, {id:"6", name:"РПГ"}, {id:"7", name:"Симулятор"}, {id:"8", name:"Спортивная"}, {id:"9", name:"Стратегия"}, {id:"10", name:"Хоррор"}, {id:"11", name:"Бесплатная"}, {id:"12", name:"Визуальная новелла"}, {id:"13", name:"Настольная"} ]
      render 'newreviews'
    end
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params.merge(user_id: current_user.id))
    respond_to do |format|
      if @post.save

        # 1. Взять все жанры
        # 2. Сделать по жанрам цикл
        # 3. Внутри цикла для каждого id жанра проверять параметр genres[g_id]
        @genres = Genre.all

        # logger.debug params[:genres].to_s
        @genres.each do |genre|
          # logger.debug '"g_'+genre.id.to_s+'"=>"on"'
          # if params[:genres].to_s.includes?'"g_'+genre.id.to_s+'"=>"on"'
          if params[:genres].to_s.include?'"g_'+genre.id.to_s+'"=>"on"'
            GenreToSmth.new({genre_id: genre.id, post_id:@post.id}).save
          end
        end

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
        @genres = Genre.all
        GenreToSmth.where(post_id: @post.id).destroy_all

        @genres.each do |genre|
          # logger.debug '"g_'+genre.id.to_s+'"=>"on"'
          if params[:genres].to_s.include? '"g_'+genre.id.to_s+'"=>"on"'
            GenreToSmth.new({genre_id: genre.id, post_id:@post.id}).save
          end
        end

        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
    if @post.post_type.name == "Новости"
      @categories = [{id:"1", name:"Анонсы"}, {id:"2", name:"Релизы"}, {id:"3", name:"Обновления"}, {id:"4", name:"О компаниях"} ]
    elsif @post.post_type.name == "Статьи"
      @categories = [{id:"5", name:"Факты"}, {id:"6", name:"Советы"}, {id:"7", name:"Чит-коды"} ]
    else
      @categories = [{id:"8", name:"Экшен"}, {id:"9", name:"Адвенчура"}, {id:"10", name:"Казуальная"}, {id:"11", name:"Многопользовательская"}, {id:"12", name:"Приключения"}, {id:"12", name:"Гонки"}, {id:"13", name:"РПГ"}, {id:"14", name:"Симулятор"}, {id:"15", name:"Спортивная"}, {id:"16", name:"Стратегия"}, {id:"17", name:"Хоррор"}, {id:"18", name:"Бесплатная"}, {id:"19", name:"Визуальная новелла"}, {id:"20", name:"Настольная"} ]
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

    def filtering_params(params)
      params.slice(:starts_with)
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:name, :title, :author, :content, :image, :category_id, :post_type_id, :project_id, :tag_id, :videourl, :likes, :project_start_date, :project_end_date, :feedback, :game_name, :release_date, :genre_id, :genres, :lid)
    end

    # layout 'posts'
end

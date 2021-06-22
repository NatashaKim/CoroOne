class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    @projects = Project.all.includes(:user, :genres, :posts).map do
      |project|
      project.as_json(include: [:user, :genres, :posts])
    end
  end


  def get_projects_by_user
      @projects = Project.where(user_id: params[:user_id]).includes(:posts, :genres).map do
        |project|
        project.as_json(include: [:posts, :genres])
      end
      render json: @projects
  end

  def get_newest_projects
    @projects = Project.includes(:posts, :genres).order("created_at DESC").limit(3).map do
      |project|
      project.as_json(include: [:posts, :genres])
    end
    render json: @projects
  end


  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
    @genres = Genre.all
  end

  # GET /projects/1/edit
  def edit
    @project_genres=GenreToSmth.select("genre_id").where(project_id:@project.id)
  end

  # POST /projects
  # POST /projects.json
  def create

    @project = Project.new(project_params.merge(user_id: current_user.id))

    respond_to do |format|
      logger.info(@project.errors);

      if @project.save
        logger.info(@project.errors);

        @genres = Genre.all

        @genres.each do |genre|
          if params[:genres].to_s.include?'"g_'+genre.id.to_s+'"=>"on"'
            GenreToSmth.new({genre_id: genre.id, project_id:@project.id}).save
          end
        end

        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        logger.info(@project.errors.to_json);
        @errors = @project.errors
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    respond_to do |format|

      if @project.update(project_params)
        @genres = Genre.all
        GenreToSmth.where(project_id: @project.id).destroy_all

        @genres.each do |genre|
          if params[:genres].to_s.include? '"g_'+genre.id.to_s+'"=>"on"'
            GenreToSmth.new({genre_id: genre.id, project_id:@project.id}).save
          end
        end

        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:name, :description, :project_start_date, :project_end_date, :download_project, :donate_project, :idea_or_concept, :plot_and_characters, :game_mechanics, :hero_voices, :background_music, :effects, :engine, :game_ai, :three_d_and_animation, :characters, :levels_and_worlds, :objects, :project_cover, :genre_id, :user_id)
    end
end

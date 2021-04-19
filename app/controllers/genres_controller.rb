class GenresController < ApplicationController
   before_action :set_genre, only: [:show, :edit, :update, :destroy]

   # GET /categories
   # GET /categories.json
   def index
     @genres = Genre.all
   end

   # GET /categories/1
   # GET /categories/1.json
   def show
   end

   # GET /categories/new
   def new
     @genre = Genre.new
   end

   # GET /categories/1/edit
   def edit
   end

   # POST /categories
   # POST /categories.json
   def create
     @genre = Genre.new(genre_params)

     respond_to do |format|
       if @genre.save
         format.html { redirect_to @genre, notice: 'Genre was successfully created.' }
         format.json { render :show, status: :created, location: @genre }
       else
         format.html { render :new }
         format.json { render json: @genre.errors, status: :unprocessable_entity }
       end
     end
   end

   # PATCH/PUT /categories/1
   # PATCH/PUT /categories/1.json
   def update
     respond_to do |format|
       if @genre.update(genre_params)
         format.html { redirect_to @genre, notice: 'Genre was successfully updated.' }
         format.json { render :show, status: :ok, location: @genre }
       else
         format.html { render :edit }
         format.json { render json: @genre.errors, status: :unprocessable_entity }
       end
     end
   end

   # DELETE /categories/1
   # DELETE /categories/1.json
   def destroy
     @genre.destroy
     respond_to do |format|
       format.html { redirect_to genres_url, notice: 'Genre was successfully destroyed.' }
       format.json { head :no_content }
     end
   end

   private
     # Use callbacks to share common setup or constraints between actions.
     def set_genre
       @genre = Genre.find(params[:id])
     end

     # Only allow a list of trusted parameters through.
     def genre_params
       params.require(:genre).permit(:name, :image_src)
     end
 end

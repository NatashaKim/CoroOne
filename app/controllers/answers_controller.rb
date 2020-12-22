class AnswersController < ApplicationController
	def create
		@post = Post.find(params[:post_id])
		@answer = @post.answers.create(params[:answer].permit(:option, :correctness))
		redirect_to post_path(@post)
	end
  def destroy
		@post = Post.find(params[:post_id])
		@answer = @post.answers.find(params[:id])
		@answer.destroy
		redirect_to post_path(@post)
	end
end

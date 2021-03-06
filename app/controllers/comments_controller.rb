class CommentsController < ApplicationController


	def create
		@post = Post.find(params[:post_id])
		# @comment = @post.comments.new(comment_params)
		@post.comments.create(params[:comment].permit(:body, :parent_id, :post_id).merge(user_id: current_user.id))
		redirect_to post_path(@post)
		# @user = User.find(params[:id])
	end

	def destroy
		@post = Post.find(params[:post_id])
		@comment = @post.comments.find(params[:id])
		@comment.destroy
		redirect_to post_path(@post)
	end
end

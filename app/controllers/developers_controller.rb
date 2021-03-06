class DevelopersController < ApplicationController
   before_action :find_project
  def create
    @project.developers.create(user_id: current_user.id)
    redirect_to project_path(@project)
  end

  private
  def find_project
    @project = Project.find(params[:project_id])
  end
end

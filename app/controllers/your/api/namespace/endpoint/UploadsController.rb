class Api::V1::UploadsController < ApplicationController

  # these lines allow me to access the 'current_user' hash
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def create
    newImage = Upload.new
    # note that the 'file' key for the 'newImage' hash corresponds to the field
    # in the database table where the image file reference is stored
    newImage.file = params["uploaded_image"]
    newImage.user = current_user
    if newImage.save
      render json: Upload.last
    end
  end
end

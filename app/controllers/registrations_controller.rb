class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:username, :image, :email, :password, :password_confirmation, :description)
  end

  def account_update_params
    params.require(:user).permit(:username, :image, :email, :password, :password_confirmation, :current_password, :description, :admin, :ismoderator, :isdeveloper, :account_cover)
  end
end

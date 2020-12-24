class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username,:image,:isadmin,:ismoderator, :isdeveloper])
			devise_parameter_sanitizer.permit(:account_update, keys: [:username,:image,:isadmin,:ismoderator, :isdeveloper])
    end
      #helper_method :current_user
      #def current_user
      #  return unless session[:user_id]
      #  @current_user ||= User.find(session[:user_id])
      #end
end

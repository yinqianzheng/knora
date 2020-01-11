class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    helper_method :current_user, :logged_in?, :google_signin_client_id, :running_env

    def running_env 
        Rails.env
    end

    def google_signin_client_id
        client_id = "585994682438-s1gck3vli0j5dib2eh32pnk76pignjn7.apps.googleusercontent.com"
        if Rails.env == "development"
          client_id = "410414924194-p01fmqs2gn56sgg4af6alb20mu3hojs3.apps.googleusercontent.com"
        end
        client_id
    end

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_session_token!    
        session[:session_token] = nil
    end

    def current_user
        return nil unless session[:session_token]    
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !current_user.nil?
    end

    def require_logged_out
        redirect_to user_url(current_user) if logged_in?
    end

    def require_logged_in
        redirect_to "/" unless logged_in?
    end
end

require 'google-id-token'

class Api::SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user.nil?
        render json: ['Invalid email or password'], status: 401
      else
        login!(@user)
        render 'api/users/show';
      end
    end

    def handle_demo_login
      @user = User.find_by(email:"yinqianzheng@gmail.com");
      login!(@user)
      render 'api/users/show'
    end

    def handle_google_login
      validator = GoogleIDToken::Validator.new
      begin
        client_id = "585994682438-s1gck3vli0j5dib2eh32pnk76pignjn7.apps.googleusercontent.com"
        if Rails.env == "development"
          client_id = "410414924194-p01fmqs2gn56sgg4af6alb20mu3hojs3.apps.googleusercontent.com"
        end
        payload = validator.check(params[:id_token], JWT.decode(params[:id_token], nil, false)[0]["aud"], client_id)
        email = payload['email']
        @user = User.find_by(email:email)
      if(@user)
          login!(@user)
          render 'api/users/show'
        else
          @user = User.new(imageUrl: payload['picture'], email: email, firstname: payload['given_name'], lastname:payload['family_name'], password:SecureRandom.urlsafe_base64)
          if @user.save
            login!(@user)
            render 'api/users/show'
          else
            render json: @user.errors.full_messages, status: 401
          end
        end
      rescue GoogleIDToken::ValidationError => e
        report "Cannot validate: #{e}"
        # render :json => "#{e}"
      end
    end
    
    def destroy
      logout!
      render json: { message: 'Logout successful.' }
    end
end

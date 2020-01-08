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
      puts "here"
      validator = GoogleIDToken::Validator.new
      begin
        puts "1"
        payload = validator.check(params[:id_token], JWT.decode(params[:id_token], nil, false)[0]["aud"], "585994682438-s1gck3vli0j5dib2eh32pnk76pignjn7.apps.googleusercontent.com")
        puts "2"
        email = payload['email']
        @user = User.find_by(email:email)
        puts "3"
        if(@user)
          puts "4"
          login!(@user)
          puts "5"
          render 'api/users/show'
        else
          puts "6"
          @user = new User(email: email, firstname: payload['given_name'], lastname:payload['family_name'], password:SecureRandom.urlsafe_base64)
          puts "7"
          if @user.save
            puts "8"
            login!(@user)
            puts "9"
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

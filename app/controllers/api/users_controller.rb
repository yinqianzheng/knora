class Api::UsersController < ApplicationController
    def create
      @user = User.new(user_params)
      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
      
    def update
      @user = selected_user
      if @user && @user.update_attributes(user_params)
        render :show
      elsif !@user
        render json: ['Could not locate user'], status: 400
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
    
    def show
      @user = selected_user
    end
    
    def index
      @users = User.all
    end
    
    def destroy
      @user = selected_user
      if @user
        @user.destroy
        render :show
      else
        render ['Could not find user']
      end
    end
    
    def handle_get_watch_list
      @watch_list = Watcher.where("watcher_id = ?", params[:user_id]).pluck("question_id")
      render json: @watch_list
    end


    private
    
    def selected_user
      User.find(params[:id])
    end
    
    def user_params
      params.require(:user).permit(:firstname, :lastname, :email, :password)
    end
end

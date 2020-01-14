class Api::WatchersController < ApplicationController
    def create
        puts "follow question controller"
        watch = Watcher.new(watcher_params)
        if watch.save
            render json: {id: watch.question_id}
          else
            render json: watch.errors.full_messages, status: 401
          end
    end

    def destroy
        puts "unfollow question controller"
        watch = Watcher.find_by(watcher_params)
        if watch
          watch.destroy
          render json: {id: watch.question_id}
        else
          render ['Could not find question']
        end
    end

    private
    def watcher_params
      params.require(:watcher).permit(:watcher_id, :question_id)
    end
end

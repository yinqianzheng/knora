class Api::AnswersController < ApplicationController
    def create
        @answer = Answer.new(answer_params)
      if @answer.save
        render 'api/answers/show'
      else
        render json: @answer.errors.full_messages, status: 401
      end
    end
  
    def update
        @answer = Answer.find(params[:id])
        if @answer && @answer.update_attributes(answer_params)
            render 'api/answers/show'
        elsif !@answer
            render json: ['Could not locate answer'], status: 400
        else
            render json: @answer.errors.full_messages, status: 401
        end
    end
  
    def destroy
        @answer = Answer.find(params[:id])
      if @answer
        @answer.destroy
        render json: {redirect: "after delete answer"}
      else
        render ['Could not find answer']
      end
    end
  
    private
    def answer_params
      params.require(:answer).permit(:body, :author_id, :question_id)
    end
end

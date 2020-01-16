class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all.order("id DESC").limit(10)
    render 'api/questions/index'
  end

  def create
      @question = Question.new(question_params)
    if @question.save
      render 'api/questions/show'
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def update
      @question = Question.find(params[:id])
      if @question && @question.update_attributes(question_params)
          render 'api/questions/show'
      elsif !@question
          render json: ['Could not locate question'], status: 400
      else
          render json: @question.errors.full_messages, status: 401
      end
  end

  def destroy
      @question = Question.find(params[:id])
    if @question
      @question.destroy
      render json: {redirect: "after delete question"}
    else
      render ['Could not find question']
    end
  end


  def handle_get_new_questions
    @questions = Question.order('RANDOM()').where('id NOT IN (?)', params[:range]).limit(12)
    render 'api/questions/new_questions'
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def handle_search
    results = ActiveRecord::Base.connection.exec_query("select id, title from (select id, title, (" + params[:words].split(" ").map{|w| "(case when title like '%#{w}%' then 1 else 0 end)"}.join("+") + ") as count from questions order by count desc) as t where t.count > 0 limit 5")
    render json: results
  end

  private
  def question_params
    params.require(:question).permit(:title, :author_id)
  end
end

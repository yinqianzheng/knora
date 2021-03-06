class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.order('RANDOM()').limit(12)
    render 'api/questions/index'
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      if params[:question][:topics]
        params[:question][:topics].each do |topic_id|
          topic_question = TopicQuestion.new({question_id: @question.id, topic_id:topic_id})
          if !topic_question.save 
            render json: topic_question.errors.full_messages, status: 401
          end
        end
      end
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

  def handle_get_topic_questions
    @questions = Topic.find(params[:id]).questions
    render 'api/questions/index'
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
    words = params[:words].split("'").join(" ").downcase.split(" ")
    results = ActiveRecord::Base.connection.exec_query("select id, title from (select id, title, (" + words.map{|w| "(case when LOWER(title) like '%#{w}%' then 1 else 0 end)"}.join("+") + ") as count from questions order by count desc) as t where t.count > 0 limit 5")
    render json: results
  end

  private
  def question_params
    params.require(:question).permit(:title, :author_id)
  end
end

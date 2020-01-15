class Api::VotesController < ApplicationController
    def create
        vote = Vote.find_by({user_id: params[:vote][:user_id], answer_id: params[:vote][:answer_id]})
        if vote
            if vote.upvote == true
                vote.destroy
                render json: {action: "REMOVE_VOTE", vote: vote, count: 1}
            else 
                if vote.update_attributes({upvote: true})
                    render json: {action: "ADD_VOTE", vote: vote, count: 2}
                else 
                    render json: vote.errors.full_messages, status: 401
                end
            end
        else 
            vote = Vote.new(vote_params)
            if vote.save 
                render json: {action: "ADD_VOTE", vote: vote, count: 1}
            else
              render json: vote.errors.full_messages, status: 401
            end
        end
    end 

    def destroy
        vote = Vote.find_by({user_id: params[:vote][:user_id], answer_id: params[:vote][:answer_id]})
        if vote
            if vote.upvote == false
                vote.destroy
                render json: {action: "REMOVE_DOWNVOTE", vote: vote, count: 1}
            else 
                if vote.update_attributes!({upvote: false})
                    render json: {action: "ADD_DOWNVOTE", vote: vote, count: 2}
                else 
                    render json: vote.errors.full_messages, status: 401
                end
            end
        else 
            vote = Vote.new(vote_params)
            if vote.save 
                render json: {action: "ADD_DOWNVOTE", vote: vote, count: 1}
            else
              render json: vote.errors.full_messages, status: 401
            end
        end
    end

    private
    def vote_params
      params.require(:vote).permit(:answer_id, :user_id, :upvote)
    end
end



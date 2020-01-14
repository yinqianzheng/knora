# need to change
json.id @answer.id
json.questionId @answer.question_id
json.author do 
    json.extract! @answer.author, :firstname, :lastname, :id
end
json.body @answer.body
json.updatedAt Time.at(@answer.updated_at).strftime("%b %e, %Y")
json.views 12
json.upvote 9
# need to change
puts 

json.array! @questions do |question|
    json.id question.id
    json.authorId question.author_id
    json.title question.title
    json.numOfAnswers question.answers.count
    json.numOfFollowers question.watchers.count
    answer = question.answers.first
    if answer 
        json.answer do 
            json.id answer.id 
            json.questionId answer.question_id 
            json.updatedAt Time.at(answer.updated_at).strftime("%b %e, %Y")
            json.author do
                json.id answer.author.id
                json.imageUrl answer.author.imageUrl
                json.firstname answer.author.firstname
                json.lastname answer.author.lastname
            end
            json.body answer.body 
            json.views answer.views 
            json.upvotes 9
        end
    end
    
end

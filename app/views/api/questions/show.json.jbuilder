json.id @question.id
json.authorId @question.author_id
json.title @question.title
json.numOfAnswers @question.answers.count
json.numOfFollowers @question.watchers.count
answers = @question.answers
if answers
    json.answers answers do |ans|
        json.id ans.id 
        json.questionId ans.question_id 
        json.updatedAt Time.at(ans.updated_at).strftime("%b %e, %Y")
        json.author do
            json.id ans.author.id
            json.imageUrl ans.author.imageUrl
            json.firstname ans.author.firstname
            json.lastname ans.author.lastname
        end
        json.body ans.body 
        json.views ans.views 
        json.upvotes ans.upvotes.where("upvote = true").count - ans.upvotes.where("upvote = false").count
    end
end
json.relatedQuestions @question.related_questions()
json.topics @question.topics.select(:id, :topic)
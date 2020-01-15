# need to change

json.array! @questions do |question|
    json.id question.id
    json.title question.title
    json.numOfAnswers question.answers.count
    json.numOfFollowers question.watchers.count
    json.authorId question.author_id
    json.answers []
end
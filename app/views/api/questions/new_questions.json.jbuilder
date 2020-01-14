# need to change

json.array! @questions do |question|
    json.id question.id
    json.title question.title
    json.numOfAnswers question.answers.count
    json.numOfFollowers question.followers
    json.authorId question.author_id
end
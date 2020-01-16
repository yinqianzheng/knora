class Question < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id,
        primary_key: :id


    has_many :answers,
        class_name: :Answer,
        foreign_key: :question_id,
        primary_key: :id


    has_many :question_watchers_relations,
        class_name: :Watcher,
        foreign_key: :question_id,
        primary_key: :id

    has_many :watchers,
        through: :question_watchers_relations,
        source: :watcher
     
    def most_voted_answer(id) 
        result = ActiveRecord::Base.connection.exec_query("SELECT T.id from (select answers.id, CASE WHEN upvote IS true THEN 1 WHEN upvote IS false THEN -1 ELSE 0 END AS num from answers LEFT JOIN votes ON answers.id = votes.answer_id where answers.question_id = #{id}) as T group by T.id order by SUM(T.num) DESC limit(1)")
        if result[0]
            return [Answer.find(result[0]["id"])]
        end
        return []
    end
end

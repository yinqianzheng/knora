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

    has_many :topic_question_associations,
        class_name: :TopicQuestion,
        foreign_key: :question_id,
        primary_key: :id

    has_many :topics,
        through: :topic_question_associations,
        source: :topic
     
    def most_voted_answer() 
        result = ActiveRecord::Base.connection.exec_query("SELECT T.id from (select answers.id, CASE WHEN upvote IS true THEN 1 WHEN upvote IS false THEN -1 ELSE 0 END AS num from answers LEFT JOIN votes ON answers.id = votes.answer_id where answers.question_id = #{self.id}) as T group by T.id order by SUM(T.num) DESC limit(1)")
        if result[0]
            return [Answer.find(result[0]["id"])]
        end
        return []
    end

    def related_questions()
        results = ActiveRecord::Base.connection.exec_query("select id, title from (select id, title, (" + self.title.split(" ").map{|w| "(case when title like '%#{w}%' then 1 else 0 end)"}.join("+") + ") as count from questions where id != #{self.id} order by count desc) as t where t.count > 0 limit 10")
        return results
    end
end

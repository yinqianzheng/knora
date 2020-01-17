class Topic < ApplicationRecord
    validates :topic, presence: true

    has_many :topic_question_associations,
        class_name: :TopicQuestion,
        foreign_key: :topic_id,
        primary_key: :id

    has_many :questions,
        through: :topic_question_associations,
        source: :question
end

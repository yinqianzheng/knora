class TopicQuestion < ApplicationRecord
    validates :topic_id, :question_id, presence: true

    belongs_to :question,
        class_name: :Question,
        foreign_key: :question_id,
        primary_key: :id

    belongs_to :topic,
        class_name: :Topic,
        foreign_key: :topic_id,
        primary_key: :id

end

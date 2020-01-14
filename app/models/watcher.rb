class Watcher < ApplicationRecord
    validates :watcher_id, :question_id, presence: true

    belongs_to :watcher,
        class_name: :User,
        foreign_key: :watcher_id,
        primary_key: :id

    belongs_to :question,
        class_name: :Question,
        foreign_key: :question_id,
        primary_key: :id
end

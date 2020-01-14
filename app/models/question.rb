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
     
end

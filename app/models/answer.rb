class Answer < ApplicationRecord
    validates :body, :author_id, :question_id, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id,
        primary_key: :id

    belongs_to :question,
        class_name: :Question,
        foreign_key: :question_id,
        primary_key: :id

    has_many :upvotes,
        class_name: :Vote,
        foreign_key: :answer_id,
        primary_key: :id

    has_many :likers,
        through: :upvotes,
        source: :user

end

class Vote < ApplicationRecord
    validates :user_id, :answer_id, presence: true

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id

    belongs_to :answer,
        class_name: :Answer,
        foreign_key: :answer_id,
        primary_key: :id

end

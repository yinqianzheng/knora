class Subscriber < ApplicationRecord
    validates :user_id, :subscriber_id, presence: true

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id

    belongs_to :subscriber,
        class_name: :User,
        foreign_key: :subscriber_id,
        primary_key: :id
end

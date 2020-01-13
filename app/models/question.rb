class Question < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id,
        primary_key: :id


    def answers 
        0
    end

    def followers
        0
    end

end

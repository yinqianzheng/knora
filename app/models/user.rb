class User < ApplicationRecord
    attr_reader :password
    validates :firstname, :lastname, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token

    has_many :questions,
        class_name: :Question,
        foreign_key: :author_id,
        primary_key: :id

    has_many :answers,
        class_name: :Answer,
        foreign_key: :author_id,
        primary_key: :id

    has_many :channel,
        class_name: :Subscriber,
        foreign_key: :user_id,
        primary_key: :id

    has_many :subscribers,
        class_name: :Subscriber,
        through: :channel,
        source: :subscriber

    has_many :watchers,
        class_name: :Watcher,
        foreign_key: :watcher_id,
        primary_key: :id

    has_many :watchlist,
        through: :watchers,
        source: :question

    has_many :upvotes,
        class_name: :Vote,
        foreign_key: :user_id,
        primary_key: :id

    has_many :upvoted_answers,
        through: :upvotes,
        source: :answer

    
    

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end

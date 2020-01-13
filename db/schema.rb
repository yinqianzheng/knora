# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_07_200138) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_answers_on_author_id", unique: true
    t.index ["question_id"], name: "index_answers_on_question_id", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.text "bpdy", null: false
    t.integer "author_id", null: false
    t.integer "answer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_id"], name: "index_comments_on_answer_id", unique: true
    t.index ["author_id"], name: "index_comments_on_author_id", unique: true
  end

  create_table "followers", force: :cascade do |t|
    t.integer "topic_id", null: false
    t.integer "follower_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id"], name: "index_followers_on_follower_id"
    t.index ["topic_id", "follower_id"], name: "index_followers_on_topic_id_and_follower_id", unique: true
  end

  create_table "questions", force: :cascade do |t|
    t.string "title", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title", "author_id"], name: "index_questions_on_title_and_author_id", unique: true
  end

  create_table "subscribers", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "subscriber_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subscriber_id"], name: "index_subscribers_on_subscriber_id"
    t.index ["user_id", "subscriber_id"], name: "index_subscribers_on_user_id_and_subscriber_id", unique: true
  end

  create_table "topic_questions", force: :cascade do |t|
    t.integer "topic_id", null: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_topic_questions_on_question_id"
    t.index ["topic_id", "question_id"], name: "index_topic_questions_on_topic_id_and_question_id", unique: true
  end

  create_table "topics", force: :cascade do |t|
    t.string "topic", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["topic"], name: "index_topics_on_topic", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.text "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.integer "answer_id", null: false
    t.integer "user_id", null: false
    t.boolean "upvote", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_id", "user_id"], name: "index_votes_on_answer_id_and_user_id", unique: true
    t.index ["user_id"], name: "index_votes_on_user_id"
  end

  create_table "watchers", force: :cascade do |t|
    t.integer "question_id", null: false
    t.integer "watcher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id", "watcher_id"], name: "index_watchers_on_question_id_and_watcher_id", unique: true
    t.index ["watcher_id"], name: "index_watchers_on_watcher_id"
  end

end

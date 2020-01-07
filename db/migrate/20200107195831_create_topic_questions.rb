class CreateTopicQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :topic_questions do |t|
      t.integer :topic_id, null: false,
      t.integer :question_id, null: false,
      t.timestamps
    end

    add_index :topic_questions, [:topic_id, :question_id], unique: true
    add_index :topic_questions, :question_id
  end
end

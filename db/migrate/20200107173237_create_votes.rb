class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false
      t.boolean :upvote, null: false
      t.timestamps
    end

    add_index :votes, [:answer_id, :user_id], unique: true
    add_index :votes, :user_id
  end
end

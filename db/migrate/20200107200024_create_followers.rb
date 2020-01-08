class CreateFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :followers do |t|
      t.integer :topic_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end

    add_index :followers, [:topic_id, :follower_id], unique: true
    add_index :followers, :follower_id
  end
end

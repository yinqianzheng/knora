class CreateWatchers < ActiveRecord::Migration[5.2]
  def change
    create_table :watchers do |t|
      t.integer :question_id, null: false,
      t.integer :watcher_id, null: false,
      t.timestamps
    end

    add_index :followers, [:question_id, :watcher_id], unique: true
    add_index :followers, :watcher_id
  end
end

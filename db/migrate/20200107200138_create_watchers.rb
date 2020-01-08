class CreateWatchers < ActiveRecord::Migration[5.2]
  def change
    create_table :watchers do |t|
      t.integer :question_id, null: false
      t.integer :watcher_id, null: false
      t.timestamps
    end

    add_index :watchers, [:question_id, :watcher_id], unique: true
    add_index :watchers, :watcher_id
  end
end

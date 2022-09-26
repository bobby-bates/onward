class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :description
      t.date :start_on
      t.date :end_on
      t.belongs_to :user
      t.belongs_to :location

      t.timestamps
    end
  end
end

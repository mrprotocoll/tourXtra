class UpdateTourColumn < ActiveRecord::Migration[7.0]
  def change
    change_column :tours, :status, :boolean, default: false
  end
end

class UpdateToursName < ActiveRecord::Migration[7.0]
  def change
    change_column :tours, :name, :text
    change_column :tours, :city, :text
    change_column :tours, :des, :text
  end
end

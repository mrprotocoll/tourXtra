require 'bcrypt'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
hashed_password = BCrypt::Password.create('123456')

@user = User.create(name: 'test2', email: 'test2@gmail.com', password_digest: hashed_password)

@tour = Tour.create(name: 'Obudu tour', city: 'Ibom', price: 245.00, video: 'Do it now or die regretting',
    user_id: @user.id)
@reservation = Reservation.create(start_date: '12-02-2023', end_date: '12-08-2023', user_id: @user.id,
    tour_id: @tour.id)
@reservation = Reservation.create(start_date: '13-04-2023', end_date: '13-08-2023', user_id: @user.id,
    tour_id: @tour.id)
@reservation = Reservation.create(start_date: '16-01-2023', end_date: '12-10-2023', user_id: @user.id,
    tour_id: @tour.id)
@reservation = Reservation.create(start_date: '30-06-2023', end_date: '12-12-2023', user_id: @user.id,
    tour_id: @tour.id)
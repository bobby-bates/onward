# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts '🌱 Seeding...'
sleep 0.5

u1 = User.create(username: 'interestpassion', email: 'bobby@zmail.com')
u2 = User.create(username: 'what_objective', email: 'callie@zmail.com')
u3 = User.create(username: 'proud_ofyou', email: 'jenny@zmail.com')

l1 = Location.create(name: 'Gibbstown, NJ', lat: 39.825020, lng: -75.289520)
l2 = Location.create(name: 'New York, NY', lat: 40.712776, lng: -74.005974)
l3 = Location.create(name: 'Tucson, AZ', lat: 32.222607, lng: -110.974709)

# Dates use strftime('%m-%d-%Y')
Trip.create(description: 'Born and raised.', start_on: Date.parse('1987-09-24'), end_on: Date.parse('2006-12-31'), user: u1, location: l1)
Trip.create(description: 'NYFA and dodging cars for money.', start_on: Date.parse('2007-01-01'), end_on: Date.parse('2012-06-15'), user: u1, location: l1)
Trip.create(description: 'Digital nomad life begins.', start_on: Date.parse('2022-11-01'), end_on: Date.parse('2099-01-01'), user: u1, location: l1)

puts '✅ Seeding complete!'

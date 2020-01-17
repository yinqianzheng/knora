# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

topic1 = {topic: "Computer Science"}
topic2 = {topic: "Food"}
topic3 = {topic: "Technology"}
topic4 = {topic: "Pet"}

Topic.create!(topic1)
Topic.create!(topic2)
Topic.create!(topic3)
Topic.create!(topic4)

User.create!({firstname: "Demo", lastname: "User", email: "demo@gmail.com", password: "1111111"})
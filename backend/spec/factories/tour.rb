FactoryBot.define do
  factory :tour do
    sequence(:name) { |n| "Tour #{n}" }
    sequence(:city) { |n| "Canada #{n}" }
    price { 245.00 }
    video { 'https://www.youtube.com/watch?v=XxuPlSW4t6M&list=PLCawOXF4xaJLb9HwPWiizGBNupJszY6bR' }
    des do
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a possimus impedit modi quia? Incidunt?'
    end
    user

    after(:build) do |tour|
      tour.image.attach(
        io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'dominos.png')),
        filename: 'dominos.jpg',
        content_type: 'image/jpeg'
      )
    end
  end
end

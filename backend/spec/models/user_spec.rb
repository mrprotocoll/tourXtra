require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = User.create(name: 'Test user', email: 'rails@gmail.com',
                        password_digest: '123456')
  end
  it 'is valid with valid attributes' do
    expect(@user).to be_valid
  end
  it 'is not valid without a name' do
    @user.name = nil
    expect(@user).to_not be_valid
  end
  it 'is not valid without an email' do
    @user.email = nil
    expect(@user).to_not be_valid
  end

  it 'is not valid with a name shorter than 3 characters' do
    @user.name = 0o1
    expect(@user).to_not be_valid
  end
end

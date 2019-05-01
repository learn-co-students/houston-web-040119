class Corgi < ApplicationRecord
    has_many :friendships
    has_many :owners, through: :friendships


    validates :name, presence: true
    validates :age, numericality: { only_integer: true , greater_than_or_equal_to: 0, less_than_or_equal_to: 25 }

end

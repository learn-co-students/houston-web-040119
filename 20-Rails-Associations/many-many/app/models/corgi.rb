class Corgi < ApplicationRecord
    has_many :friendships
    has_many :owners, through: :friendships
end

class Owner < ApplicationRecord
    has_many :friendships
    has_many :corgis, through: :friendships
end

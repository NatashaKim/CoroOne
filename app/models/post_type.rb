class PostType < ApplicationRecord
  has_many :categories
  has_many :genres
end

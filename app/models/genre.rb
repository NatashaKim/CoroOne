class Genre < ApplicationRecord
  has_many :genre_to_smths
  has_many :posts, through: :genre_to_smths
  belongs_to :post_type
end

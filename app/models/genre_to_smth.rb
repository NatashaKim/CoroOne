class GenreToSmth < ApplicationRecord
  belongs_to :genre
  belongs_to :post, optional: true
  belongs_to :project, optional: true
end

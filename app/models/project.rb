class Project < ApplicationRecord
  has_many :posts
  has_many :developers, dependent: :destroy
end

class Project < ApplicationRecord
  has_many :posts
  has_many :developers, dependent: :destroy
  has_many :genre_to_smths, dependent: :destroy
  has_many :genres, through: :genre_to_smths, dependent: :destroy

  belongs_to :user

  mount_uploader :project_cover, ProjectCoverUploader

end

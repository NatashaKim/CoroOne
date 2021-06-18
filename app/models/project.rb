class Project < ApplicationRecord
  has_many :posts
  has_many :developers, dependent: :destroy

  mount_uploader :project_cover, ProjectCoverUploader

end

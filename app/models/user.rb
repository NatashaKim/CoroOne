class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

   has_many :likes, dependent: :destroy
   has_many :developers, dependent: :destroy

   has_many :favorites, dependent: :destroy
   has_many :favorited_posts, :through => :favorites, :source => :post

  has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
  has_many :followees, through: :followed_users
  has_many :following_users, foreign_key: :followee_id, class_name: 'Follow'
  has_many :followers, through: :following_users

  mount_uploader :image, AvatarUploader
  mount_uploader :account_cover, AccountCoverUploader



#   after_save :toggle_admin
#
#   private
#
#       def toggle_admin
#         if self.admin == true
#           self.toggle!(:admin)
#         end
#       end
#
#
end

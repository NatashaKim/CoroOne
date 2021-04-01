		require 'elasticsearch/model'
class Post < ApplicationRecord
		include Elasticsearch::Model
		include Elasticsearch::Model::Callbacks


    searchkick



		validates :content, :presence => true,
											:length => { :minimum => 5 }

		has_many :comments, :dependent => :destroy
		has_many :answers, :dependent => :destroy
		has_many :likes, dependent: :destroy
		has_many :favorites, dependent: :destroy

		has_and_belongs_to_many :tags, :dependent => :destroy

    belongs_to :user
		belongs_to :category, optional: true
		belongs_to :post_type

		mount_uploader :image, ImageUploader

		after_create do
			post = Post.find_by(id: self.id)
			hashtags = self.content.scan(/#\w+/)
			hashtags.uniq.map do |hashtag|
				tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
				post.tags << tag
			end
		end

		before_update do
			post = Post.find_by(id: self.id)
			post.tags.clear
			hashtags = self.content.scan(/#\w+/)
			hashtags.uniq.map do |hashtag|
				tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
				post.tags << tag
			end
		end

end

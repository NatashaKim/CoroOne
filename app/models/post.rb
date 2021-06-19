		require 'elasticsearch/model'
class Post < ApplicationRecord
		scope :filter_by_user, -> (user) { where user: user }
	  scope :filter_by_category, -> (category) { where category: category }

		include Elasticsearch::Model
		include Elasticsearch::Model::Callbacks


    searchkick



		validates :content, :presence => true,
											:length => { :minimum => 5 }

		has_many :comments, :dependent => :destroy
		has_many :answers, :dependent => :destroy
		has_many :likes, dependent: :destroy
		has_many :favorites, dependent: :destroy
		has_many :genre_to_smths, dependent: :destroy
		has_many :genres, through: :genre_to_smths, dependent: :destroy

		has_and_belongs_to_many :tags, :dependent => :destroy

    belongs_to :user
		belongs_to :category, optional: true
		belongs_to :post_type
		belongs_to :project, optional: true

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

		def self.tagged_with(name)
			Genre.find_by_name!(name).posts
		end

		def self.genre_counts
			Genre.select("genres.*, count(genre_to_smths.genre_id) as count").
			  joins(:genre_to_smths).group("genre_to_smths.genre_id")
		end

		def genre_list=(names)
			self.genres = genres.split(",").map do |n|
				Genre.where(name: n.strip).first_or_create!
			end
		end

end

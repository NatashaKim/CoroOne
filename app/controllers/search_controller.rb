class SearchController < ApplicationController

#   def search
#     if params[:term].nil?
#       @posts = []
#     else
#       term = params[:term]
#       @posts = Post.search term, fields: [:content], highlight:  true
#     end
#   end
#
# def self.search(query)
#   __elasticsearch__.search(
#     {
#       query: {
#         multi_match: {
#           query: query,
#           fields: ['title', 'content']
#         }
#       },
#       highlight: {
#         pre_tags: ['<em>'],
#         post_tags: ['</em>'],
#         fields: {
#           title: {},
#           content: {}
#         }
#       }
#     }
#   )
#  end

 def index
   @posts = Post.where(nil)
   filtering_params(params).each do |key, value|
     @posts = @posts.public_send("filter_by_#{key}", value) if value.present?
   end
 end

 private
   def filtering_params(params)
      params.slice(:starts_with)
   end
 end

module PostsHelper
  def render_with_hashtags(content)
    content.gsub(/#\w+/){|word| link_to word, "/posts/hashtag/#{word.delete('#')}"}.html.safe
  end
end

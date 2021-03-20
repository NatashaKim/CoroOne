#Post.destroy_all
#puts "Destroyed everything you touch"

# posts = [
#   {
#   	name: "О компаниях",
#   	title: "Ветераны Blizzard открыли студию, которая займется  стратегиями",
#   	author: "Руслан Присекин",
#   	content: "Стратегии в реальном времени — совсем не самый популярный ныне жанр, блокбастеры выходят не часто.",
#     image: File.open(Rails.root.join('public', 'images', 'seed_img_1.jpg'))
#   },
#   {
#   	name: "Анонсы",
#   	title: "Трейлер к выходу Amnesia: rebirth — сиквела The dark descent",
#   	author: "Андрей Маковеев",
#   	content: "В релиз отправилась Amnesia: Rebirth — очередной хоррор от мастеров жанра из Frictional Games.",
#     image: File.open(Rails.root.join('public', 'images', 'seed_img_2.jpg'))
#   },
#   {
#   	name: "Обновления",
#   	title: "Для Starfield полностью переписали систему анимаций",
#   	author: "Геннадий Воробьев",
#   	content: "Bethesda Game Studios не раскрывает официальных подробностей о Starfield.",
#     image: File.open(Rails.root.join('public', 'images', 'seed_img_3.jpg'))
#   }
# ]
#
# posts.each do |post|
# 	postik = Post.create(post)
# 	puts post
# 	puts postik
# 	puts postik.to_json
# 	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
# end

# post = Post.create(posts[0])

# puts "Some magic just create a #{ post.name } with id #{ post.id }!"


post_types=[
  {    name: "Кладбище проектов"  },

]
post_types.each do |pt|
  r=PostType.create(pt)
  puts "Some magic just create a #{ r.name } with id #{ r.id }!"
end

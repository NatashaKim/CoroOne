# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_21_165415) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text "option"
    t.boolean "correctness"
    t.integer "post_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_answers_on_post_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "display_in_navbar", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "post_type_id"
    t.string "imagesrc"
    t.index ["post_type_id"], name: "index_categories_on_post_type_id"
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string "data_file_name", null: false
    t.string "data_content_type"
    t.integer "data_file_size"
    t.string "type", limit: 30
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["type"], name: "index_ckeditor_assets_on_type"
  end

  create_table "comments", force: :cascade do |t|
    t.string "commenter"
    t.text "body"
    t.integer "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id", null: false
    t.integer "parent_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "developers", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_developers_on_project_id"
    t.index ["user_id"], name: "index_developers_on_user_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_favorites_on_post_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "genre_to_smths", force: :cascade do |t|
    t.bigint "genre_id", null: false
    t.bigint "post_id"
    t.bigint "project_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["genre_id"], name: "index_genre_to_smths_on_genre_id"
    t.index ["post_id"], name: "index_genre_to_smths_on_post_id"
    t.index ["project_id"], name: "index_genre_to_smths_on_project_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.string "image_src"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "post_type_id"
    t.index ['"post_type_id"]', name: "index_genres_on_post_type_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_likes_on_post_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "post_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "author"
    t.string "image"
    t.integer "user_id", null: false
    t.integer "category_id"
    t.integer "post_type_id"
    t.integer "project_id"
    t.string "videourl"
    t.date "project_start_date"
    t.date "project_end_date"
    t.text "feedback"
    t.string "game_name"
    t.date "release_date"
    t.text "lid"
    t.index ["category_id"], name: "index_posts_on_category_id"
    t.index ["post_type_id"], name: "index_posts_on_post_type_id"
    t.index ["project_id"], name: "index_posts_on_project_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "posts_tags", id: false, force: :cascade do |t|
    t.integer "post_id"
    t.integer "tag_id"
    t.index ["post_id"], name: "index_posts_tags_on_post_id"
    t.index ["tag_id"], name: "index_posts_tags_on_tag_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.date "project_start_date"
    t.date "project_end_date"
    t.text "download_project"
    t.text "donate_project"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "status"
    t.boolean "idea_or_concept", default: false
    t.boolean "plot_and_characters", default: false
    t.boolean "game_mechanics", default: false
    t.boolean "hero_voices", default: false
    t.boolean "background_music", default: false
    t.boolean "effects", default: false
    t.boolean "engine", default: false
    t.boolean "game_ai", default: false
    t.boolean "three_d_and_animation", default: false
    t.boolean "characters", default: false
    t.boolean "levels_and_worlds", default: false
    t.boolean "objects", default: false
    t.string "project_cover"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "subscribers", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tags", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
  end

  create_table "uploads", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.boolean "admin", default: false
    t.string "image"
    t.boolean "ismoderator", default: false
    t.boolean "isdeveloper", default: false
    t.text "description"
    t.string "account_cover"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "answers", "posts"
  add_foreign_key "categories", "post_types"
  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "developers", "projects"
  add_foreign_key "developers", "users"
  add_foreign_key "favorites", "posts"
  add_foreign_key "favorites", "users"
  add_foreign_key "genre_to_smths", "genres"
  add_foreign_key "genre_to_smths", "posts"
  add_foreign_key "genre_to_smths", "projects"
  add_foreign_key "genres", "post_types"
  add_foreign_key "likes", "posts"
  add_foreign_key "likes", "users"
  add_foreign_key "posts", "categories"
  add_foreign_key "posts", "post_types"
  add_foreign_key "posts", "projects"
  add_foreign_key "posts", "users"
  add_foreign_key "posts_tags", "posts"
  add_foreign_key "posts_tags", "tags"
  add_foreign_key "projects", "users"
  add_foreign_key "questions", "users"
end

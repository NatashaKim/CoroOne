import React from 'react'
import A_button from './A_button.js'
import A_post_title from './A_post_title.js'
import A_icon from './A_icon.js'


const M_input = ({
  btnName,
  postTitle
}) => {

    return (
      <div>
          <A_icon
            Icon = "notification_menu_un">
          </A_icon>
          <A_icon
            Icon = "profile_menu_un">
          </A_icon>
          <A_icon
            Icon = "posts_menu_un">
          </A_icon>
          <A_icon
            Icon = "search_menu_un">
          </A_icon>
          <A_icon
            Icon = "bookmarks_menu_un">
          </A_icon>
          <A_icon
            Icon = "insta_big_gray">
          </A_icon>
          <A_icon
            Icon = "twitter_big_gray">
          </A_icon>
          <A_icon
            Icon = "vk_big_gray">
          </A_icon>
          <A_icon
            Icon = "youtube_big_gray">
          </A_icon>
          <A_icon
            Icon = "facebook_big_gray">
          </A_icon>
          <A_icon
            Icon = "telegram_big_gray">
          </A_icon>
          <A_icon
            Icon = "facebook_sign">
          </A_icon>
          <A_icon
            Icon = "google_sign">
          </A_icon>
          <A_icon
            Icon = "vk_sign">
          </A_icon>
          <A_icon
            Icon = "twitter_sign">
          </A_icon>

          <A_icon
            Icon = "clear_big">
          </A_icon>
          <A_icon
            Icon = "clear_small">
          </A_icon>
          <A_icon
            Icon = "arrow_up">
          </A_icon>
          <A_icon
            Icon = "arrow_down">
          </A_icon>
          <A_icon
            Icon = "arrow_left">
          </A_icon>
          <A_icon
            Icon = "arrow_right">
          </A_icon>
          <A_icon
            Icon = "bookmarks_post_un">
          </A_icon>
          <A_icon
            Icon = "bookmarks_post_fill">
          </A_icon>
          <A_icon
            Icon = "bookmarks_inpost_un">
          </A_icon>
          <A_icon
            Icon = "bookmarks_inpost_fill">
          </A_icon>
          <A_icon
            Icon = "notification_menu_fill">
          </A_icon>
          <A_icon
            Icon = "bookmarks_menu_fill">
          </A_icon>
          <A_icon
            Icon = "insta_small">
          </A_icon>
          <A_icon
            Icon = "facebook_small">
          </A_icon>
          <A_icon
            Icon = "gmail_small">
          </A_icon>
          <A_icon
            Icon = "vk_small">
          </A_icon>
          <A_icon
            Icon = "telegram_small">
          </A_icon>
          <A_post_title
            type = 'span'
            headingWeight = 'heading--bold'
            headingSize = 'heading--24'
            headingColors = 'heading--white'
            headingAlign = 'heading--center'>
            {postTitle}
          </A_post_title>
          <A_button
            type ='button'

            buttonSize = 'btn--medium'
            buttonColor = 'btn--blue'>
            {btnName}
          </A_button>
          <A_button
            type ='button'

            buttonSize = 'btn--small'
            buttonColor = 'btn--green'>
           {btnName}
          </A_button>
          <A_button
            type ='button'

            buttonSize = 'btn--large'
            buttonColor = 'btn--gray'>
           {btnName}
          </A_button>
          <A_button
            type ='button'

            buttonSize = 'btn--medium'
            buttonColor = 'btn--blue'>

          </A_button>
          <A_button
            type ='button'
            buttonColor = 'btn--minor'
            buttonSize = 'btn--medium'>

          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--small'
            buttonColor = 'btn--gray'>

          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--small'
            buttonColor = 'btn--text'>

          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--medium'
            buttonColor = 'btn--text'>

          </A_button>
          <A_button
            imgscr = '/assets/button_plus.svg'
            buttonColor = 'btn--create-smth'
            buttonSize = 'btn--img'>
          </A_button>
          <A_button
            imgscr = '/assets/button_add_photo.svg'
            buttonColor = 'btn--add-photo'
            buttonSize = 'btn--img'>
          </A_button>
          <A_button
            imgscr = '/assets/button_create_project.svg'
            type ='Создать проект'
            buttonColor = 'btn--create-project'
            buttonSize = 'btn--img'>
          </A_button>
          <A_button
            imgscr = '/assets/button_play.svg'
            buttonColor = 'btn--play'
            buttonSize = 'btn--img'>
          </A_button>
      </div>
    )
}

export default M_input

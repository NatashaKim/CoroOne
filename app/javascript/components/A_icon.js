import React from 'react';
import '../../assets/stylesheets/A_icon.scss'
const {PropTypes} = React;

const Icon = {
  //Иконки соц.сетей без круга для "поделиться"
  'insta_big_gray': '/assets/icon_insta.svg',
  'twitter_big_gray': '/assets/icon_twitter.svg',
  'vk_big_gray': '/assets/icon_vk.svg',
  'youtube_big_gray': '/assets/icon_youtube.svg',
  'facebook_big_gray': '/assets/icon_facebook.svg',
  'telegram_big_gray': '/assets/icon_telegram.svg',


  //Иконки соц.сетей маленькие для связи
  'insta_small': '/assets/icon_insta_small.svg',
  'facebook_small': '/assets/icon_facebook_small.svg',
  'gmail_small': '/assets/icon_gmail_small.svg',
  'vk_small': '/assets/icon_vk_small.svg',
  'telegram_small': '/assets/icon_telegram_small.svg',


  //Иконки соц.сетей для форм входа и регистриций (в круге)
  'facebook_sign': '/assets/icon_facebook_circle.svg',
  'google_sign': '/assets/icon_google_circle.svg',
  'vk_sign': '/assets/icon_vk_circle.svg',
  'twitter_sign': '/assets/icon_twitter_circle.svg',

  //Крестик (выйти, очистить)
  'clear_big': '/assets/icon_clear_big.svg',
  'clear_small': '/assets/icon_clear_small.svg',

  //Маленькие стрелочки
  'arrow_up': '/assets/icon_arrow_up.svg',
  'arrow_down': '/assets/icon_arrow_down.svg',
  'arrow_right': '/assets/icon_arrow_right.svg',
  'arrow_left': '/assets/icon_arrow_left.svg',
  'arrow_big': '/assets/icon_arrow_big.svg',

  //Cохраненки в пользовательском посте
  'bookmarks_post_un': '/assets/icon_bookmarks_post_un.svg',
  'bookmarks_post_fill': '/assets/icon_bookmarks_post_fill.svg',

  //Cохраненки внутри статьи
  'bookmarks_inpost_un': '/assets/icon_bookmarks_inpost_un.svg',
  'bookmarks_inpost_fill': '/assets/icon_bookmarks_inpost_fill.svg',
};

const A_icon = props => (
  <img className = 'icn--name' src= {Icon[props.Icon]}/>
);

export default A_icon;

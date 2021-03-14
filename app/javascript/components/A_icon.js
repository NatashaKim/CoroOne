import React from 'react'
import './A_icon.scss'






const A_icon = ({
  children,
  type,
}) => {

  return(
      <div className = {`icons`} type = {type}>
        <img src='/assets/icon_notification.svg' />
        <img src='/assets/icon_search.svg' />
        <img src='/assets/icon_posts.svg' />
        <img src='/assets/icon_profile.svg' />
        <img src='/assets/icon_bookmarks_unfilled.svg' />
        <img src='/assets/icon_search.svg' />
        <img src='/assets/icon_search.svg' />
      </div>
  )
}
export default A_icon

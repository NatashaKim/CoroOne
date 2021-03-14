import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_post_title2.scss'


const STYLES = [
  'heading--desktop-publication-card',
  'heading--mobile-publication-card',
  'heading--desktop-publication-text',
  'heading--mobile-publication-text',
  'heading--top',
  'heading--desktop-publication-inside',
]



const A_post_title2 = ({
  children,
  type,
  headingStyles
}) => {

  const checkHeadingStyle = STYLES.includes(headingStyles)
  ? headingStyles : STYLES[0]


  return(
      <span className = {`heading ${checkHeadingStyle} `} type = {type}>
        {children}
      </span>

  )
}

export default A_post_title2

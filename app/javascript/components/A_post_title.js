import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'



const STYLES = [
  'h3',
  'h4',
  'h6',
  'p4'
]

const COLORS = [
  'navy-blue',
  'ice-white'
]

const ALIGN = [
  'center_align',
  'left_align'
]

const A_post_title = ({
  children,
  type,
  headingStyle,
  headingColor,
  headingAlign,
  post,
  post_number
}) => {

  let checkHeadingStyle = STYLES.includes(headingStyle)
  ? headingStyle : STYLES[0]

  if (post_number) {
    if (post_number == 1) {
      checkHeadingStyle = 'h6'
    } else {
      checkHeadingStyle = STYLES.includes(headingStyle)
      ? headingStyle : STYLES[0]
    }
  }

  const checkHeadingColor = COLORS.includes(headingColor)
  ? headingColor : COLORS[0]

  const checkHeadingAlign = ALIGN.includes(headingAlign)
  ? headingAlign : ALIGN[0]

  return(
      <a className = {`Heading ${checkHeadingStyle} ${checkHeadingColor} ${checkHeadingAlign}`} type = {type} href={`/posts/${post.id}`}>
        {post.title}
      </a>

  )
}

export default A_post_title

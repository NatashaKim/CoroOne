import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'



const STYLES = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p2',
  'p3',
  'p4',
  'small3'
]

const COLORS = [
  'navy-blue',
  'ice-white',
  'zelda-green',
  'mineral-gray',
  'cold-black'
]

const ALIGN = [
  'center_align',
  'left_align'
]

const A_title = ({
  children,
  type,
  headingStyle,
  headingColor,
  headingAlign,
  title
}) => {

  const checkHeadingStyle = STYLES.includes(headingStyle)
  ? headingStyle : STYLES[0]

  const checkHeadingColor = COLORS.includes(headingColor)
  ? headingColor : COLORS[0]

  const checkHeadingAlign = ALIGN.includes(headingAlign)
  ? headingAlign : ALIGN[0]

  return(
      <span className = {`heading ${checkHeadingStyle} ${checkHeadingColor} ${checkHeadingAlign}`} type = {type}>
        {title}
      </span>

  )
}

export default A_title

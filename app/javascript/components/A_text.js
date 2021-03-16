import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'



const STYLES = [
  'p1',
  'p3',
  'p4',
  'small6'
]

const COLORS = [
  'mineral-gray',
  'ice-white',
  'cold-black'
]

const ALIGN = [
  'center_align',
  'left_align'
]

const A_text = ({
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

export default A_text

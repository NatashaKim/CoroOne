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
  value,
  textStyle,
  textColor,
  textAlign,
  type,
  title
}) => {

  const checkTextStyle = STYLES.includes(textStyle)
  ? textStyle : STYLES[0]

  const checkTextColor = COLORS.includes(textColor)
  ? textColor : COLORS[0]

  const checkTextAlign = ALIGN.includes(textAlign)
  ? textAlign : ALIGN[0]

  return(
      <p className = {`Text ${checkTextStyle} ${checkTextColor} ${checkTextAlign}`} type = {type}>
        {value}
      </p>
  )
}

export default A_text

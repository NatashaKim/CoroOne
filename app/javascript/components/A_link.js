import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_label.scss'


const COLORS = [
  'neon-blue',
  'mineral-gray'
]

const A_link = ({
  link,
  value,
  linkColor
}) => {

  const checkLinkColor = COLORS.includes(linkColor)
  ? linkColor : COLORS[0]

  return(
      <span className = {`Link p4 ${checkLinkColor}`} href = {link}>
        {value}
      </span>
  )
}

export default A_link

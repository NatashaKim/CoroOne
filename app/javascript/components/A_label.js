import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_label.scss'

const A_label = ({
  label
}) => {

  return(
      <span className = "Label p2 navy-blue">
        {label}
      </span>
  )
}

export default A_label

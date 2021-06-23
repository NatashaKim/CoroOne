import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'



const STYLES = [
  'h6',
  'small3',
  'p4',
  'h1'
]

const COLORS = [
  'navy-blue',
  'ice-white',
  'cold-black',
  'zelda-green'
]

const ALIGN = [
  'left_align',
  'center_align',
]

const A_project_title = ({
  children,
  type,
  headingStyle,
  headingColor,
  headingAlign,
  project
}) => {

  let checkHeadingStyle = STYLES.includes(headingStyle)
  ? headingStyle : STYLES[0]

  const checkHeadingColor = COLORS.includes(headingColor)
  ? headingColor : COLORS[0]

  const checkHeadingAlign = ALIGN.includes(headingAlign)
  ? headingAlign : ALIGN[0]

  return(
      <a className = {`Heading ${checkHeadingStyle} ${checkHeadingColor} ${checkHeadingAlign}`} type = {type} href={`/projects/${project.id}`}>
        {project.name}
      </a>
  )
}

export default A_project_title

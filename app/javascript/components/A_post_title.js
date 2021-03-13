import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_post_title.scss'


const WEIGHT = [
  'heading--bold',
  'heading--regural'
]

const SIZES = [
  'heading--14',
  'heading--18',
  'heading--24',
  'heading--28'
]

const COLORS = [
  'heading--blue',
  'heading--white'
]

const ALIGN = [
  'heading--center',
  'heading--left'
]

const A_post_title = ({
  children,
  type,
  headingWeight,
  headingSize,
  headingColors,
  headingAlign
}) => {

  const checkHeadingColors = COLORS.includes(headingColors)
  ? headingColors : COLORS[0]

  const checkHeadingSize = SIZES.includes(headingSize)
  ? headingSize : SIZES[0]

  const checkHeadingWeight = WEIGHT.includes(headingWeight)
  ? headingWeight : WEIGHT[0]

  const checkHeadingAlign = ALIGN.includes(headingAlign)
  ? headingAlign : ALIGN[0]

  return(
      <span className = {`heading ${checkHeadingColors} ${checkHeadingSize} ${checkHeadingWeight} ${checkHeadingAlign}`} type = {type}>
        {children}
      </span>

  )
}

export default A_post_title

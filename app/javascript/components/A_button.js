import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/button.scss'


//const STYLES = [
  //'btn--default',
  //'btn--minor',
  //'btn--active',
  //'btn--text',
  //'btn--graytext',
  //'btn--alternative',
  //'btn--back',
//]

const SIZES = [
  'btn--small',
  'btn--medium',
  'btn--large']

const COLORS = [
  'btn--green',
  'btn--blue',
  'btn--aqua',
  'btn--gray',
  'btn--border',
  'btn--white',
  'btn--minor',
  'btn--text',
  'btn--create'
]

const IMG = [
  '/assets/bookmark_fill_small.svg',
  '/assets/bookmark_unfill_small.svg'
]

const A_button = ({
  children,
  type,
  imgscr,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {

  //const checkButtonStyle = STYLES.includes(buttonStyle)
  //? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize : SIZES[0]

  const checkButtonColor = COLORS.includes(buttonColor)
  ? buttonColor : COLORS[0]

  let textpart = <div>{type}</div>
  let imgpart = <img className = "Vff" src = {imgscr}/>

  return(
      <button className = {`btn ${checkButtonSize} ${checkButtonColor}`} onClick = {onClick} >
        {children} {textpart} {imgpart}

      </button>

  )
}

export default A_button

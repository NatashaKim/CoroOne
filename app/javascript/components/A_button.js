import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/button.scss'
import '../../assets/stylesheets/colors.scss'


const SIZES = [
  'btn--small',
  'btn--medium',
  'btn--large',
  'btn--img'
]

const COLORS = [
  'btn--green',
  'btn--blue',
  'btn--aqua',
  'btn--gray',
  'btn--border',
  'btn--white',
  'btn--minor',
  'btn--text',
  'btn--create-smth',
  'btn--create-project',
  'btn--add-photo',
  'btn--play'
]

const IMG = [
  '/assets/button_plus.svg',
  '/assets/bookmark_add_photo.svg',
  '/assets/button_create_project.svg',
  '/assets/button_play.svg'
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


  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize : SIZES[0]

  const checkButtonColor = COLORS.includes(buttonColor)
  ? buttonColor : COLORS[0]

  let textpart = <div>{type}</div>
  let imgpart = <img className = "Vff" src = {imgscr}/>

  return(
      <button className = {`btn ${checkButtonSize} ${checkButtonColor}`} onClick = {onClick} >
        {children} {imgpart} {textpart}

      </button>

  )
}

export default A_button

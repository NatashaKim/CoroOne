import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_post_types.scss'


const IMG = [
  '/assets/title_articles.svg',
  '/assets/title_necrology.svg',
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


  const checkButtonColor = COLORS.includes(buttonColor)
  ? buttonColor : COLORS[0]

  let textpart = <div>{type}</div>
  let imgpart = <img className = "Vff" src = {imgscr}/>

  return(
      <a = {`btn ${checkButtonSize} ${checkButtonColor}`} onClick = {onClick} >
        {children} {imgpart} {textpart}
        <img src={imgsrc}/>
      </a>
   )
}

export default A_button

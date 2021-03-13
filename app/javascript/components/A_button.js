import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/button.scss'


const STYLES = [
  'btn--default',
  'btn--unactive',
  'btn--active',
  'btn--text',
  'btn--graytext',
  'btn--alternative',
  'btn--back',
]

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
  'btn--white']

const A_button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)
  ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize : SIZES[0]

  const checkButtonColor = COLORS.includes(buttonColor)
  ? buttonColor : COLORS[0]

  return(
      <button className = {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick = {onClick} type = {type}>
        {children}
      </button>

  )
}

export default A_button

//class Button extends React.Component {
  //render () {
    //return (
      //<React.Fragment>
      //</React.Fragment>
    //);
  //}
//}

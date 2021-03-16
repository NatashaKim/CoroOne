import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_add.scss'

const SIZES = [
  'adv--mobile',
  'adv--desktop',
]

const A_add = ({
  children,
  type,
  onClick,
  advBtnSizes
}) => {


  const checkadvBtnSizes = SIZES.includes(advBtnSizes)
  ? advBtnSizes : SIZES[0]

  let textpart = <div>Хочу, чтобы мой проект попал сюда!</div>
  let imgpart = <img className = "advicon" src = "/assets/icon_question.svg"/>

  return(
      <button className = {`adv ${checkadvBtnSizes}`} onClick = {onClick} >
        {children} {textpart} {imgpart}
      </button>

  )
}

export default A_add

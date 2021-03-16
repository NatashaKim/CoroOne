import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_category.scss'

const IMG = [
  '/assets/category_adventure.svg',
  '/assets/category_puzzles.svg',
  '/assets/category_rpg.svg',
  '/assets/category_shooter.svg',
  '/assets/category_simulator.svg',
  '/assets/category_sport.svg',
  '/assets/category_strategy.svg'
]

const CATEGORYSTYLE = [
  'category--desktop',
  'category--mobile'
]

const h = ({
  children,
  type,
  imgscr,
  onClick,
  categoryStyle,
  textpart
}) => {
  const checkcategoryStyle = CATEGORYSTYLE.includes(categoryStyle)
  ? categoryStyle : CATEGORYSTYLE[0]
}
const categories = props.categories : []


class A_category extends React.Component {
  render () {
    let textpart = <div>{categories}</div>
    let imgpart = <img src = {imgscr}/>

    return (
      <button className = {`category ${checkcategoryStyle}`} onClick = {onClick} >
        {children} {imgpart} {textpart}
      </button>
    );
  }
}

export default A_category

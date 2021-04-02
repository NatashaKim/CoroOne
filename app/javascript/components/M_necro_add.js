import React from "react"
import PropTypes from "prop-types"
import A_text from "./A_text"
import A_link from "./A_link"
import '../../assets/stylesheets/M_necro_add.scss'

class M_necro_add extends React.Component {
  render () {

    return (
      <div className = "Necro_add">
        <img className = "Necro_add_img" src = '/assets/sticker_necrology.svg'/>
        <div className = "Necro_add_text">
          <A_text textStyle = "p2" textColor = "zelda-green" textAlign = "left_align" value = "Станьте участником проекта CoroOne: «отдайте честь» своим и чужим идеям или помогите их воскресить"/>
          <A_link linkColor = "neon-blue" value = "Подробнее" href = "Подробнее"/>
        </div>
      </div>
    );
  }
}

export default M_necro_add

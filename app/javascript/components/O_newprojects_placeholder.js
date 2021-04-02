import React from "react"
import PropTypes from "prop-types"
import A_text from "./A_text"
import A_link from "./A_link"
import '../../assets/stylesheets/M_necro_add.scss'

class O_newprojects_placeholder extends React.Component {
  render () {
    return (
      <div className = "Newprojects_placeholder">
        <img className = "Necro_add_img" src = '/assets/new_projects_placeholder.png'/>
      </div>
    );
  }
}

export default O_newprojects_placeholder

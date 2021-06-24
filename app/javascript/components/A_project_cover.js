import React from "react"
import PropTypes from "prop-types"


class A_project_cover extends React.Component {
  render () {

    let imgsrc = '';

    if (!this.props.project.project_cover.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.project.project_cover.url;
    }

    return(
      <div className = "Project_cover_container">
        <img className = {`Project_cover`}
          src = {imgsrc}
        />
      </div>
    )
  }
}

export default A_project_cover

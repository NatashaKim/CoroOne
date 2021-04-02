import React from "react"
import PropTypes from "prop-types"


class A_postcover extends React.Component {
  render () {
    let imgsrc = '';

    if (!this.props.post.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.post.image.url;
    }

    return(
      <div className = "Postcover_container">
        <img className = {`Postcover`}
          src = {imgsrc}
        />
      </div>
    )
  }
}

export default A_postcover

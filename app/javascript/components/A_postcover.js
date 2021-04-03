import React from "react"
import PropTypes from "prop-types"


const PLACES = [
  'publication',
  'necrology'
]

class A_postcover extends React.Component {
  render () {
    let checkCoverPlace = PLACES.includes(this.props.coverPlace)
    ? this.props.coverPlace : PLACES[0]

    let imgsrc = '';

    if (!this.props.post.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.post.image.url;
    }

    return(
      <div className = {`Postcover_container ${checkCoverPlace}`}>
        <img className = {`Postcover`}
          src = {imgsrc}
        />
      </div>
    )
  }
}

export default A_postcover

import React from "react"
import PropTypes from "prop-types"

class A_account_cover extends React.Component {
  render () {

    let imgsrc = '';

    if (!this.props.user.account_cover.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.user.account_cover.url;
    }

    return(
      <div className = {`Account_cover_container`}>
        <img className = {`Account_cover`}
          src = {imgsrc}
        />
      </div>
    )
  }
}

export default A_account_cover

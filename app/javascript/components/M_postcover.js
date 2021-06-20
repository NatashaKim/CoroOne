import React from "react"
import A_postcover from "./A_postcover"

class M_postcover extends React.Component {
  render() {

    return (
      <div className="m-postcover">
        <A_postcover post = {this.props.post}/>
        <A_posttype_marker post = {this.props.post}/>

      </div>
    );
  }
}

export default M_postcover

import React from "react"
import ReactPlayer from "react-player"


class A_video extends React.Component {
    render () {
      return (
        <div>
          <ReactPlayer
            url= {this.props.videourl}
            controls = "true"
          />
        </div>
      );
    }
}

export default A_video

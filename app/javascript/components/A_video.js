import React from "react"
import ReactPlayer from "react-player"


class A_video extends React.Component {
    render () {
      return (
        <div>
          <ReactPlayer
            url= {this.props.videourl}
            controls = "true"
            width = "501px"
            height = "256px"
          />
        </div>
      );
    }
}

export default A_video

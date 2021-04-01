import React from "react"
import ReactPlayer from "react-player"


class A_video extends React.Component {
    render () {
      return (
        <div>
          <ReactPlayer
            url= {this.props.videourl}
            light = {true}
            controls = {true}
            width = "501px"
            height = "296px"
          />
        </div>
      );
    }
}

export default A_video

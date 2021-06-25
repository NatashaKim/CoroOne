import React from "react"
import ReactPlayer from "react-player"
import '../../assets/stylesheets/A_video.scss'


class A_video extends React.Component {
    render () {
      return (
        <div className="vidosik">
          <ReactPlayer
            url= {this.props.videourl}
            light = {true}
            controls = {true}
            width = "100%"
            height = "100%"
          />
        </div>
      );
    }
}

export default A_video

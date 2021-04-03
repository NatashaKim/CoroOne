import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_category.scss'
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'


class A_posttype_marker extends React.Component {
  render () {
    return (
      <div className = "Posttype_marker">
        <a className = "small3 mineral-gray" href={`/posts/by_type/${this.props.post_type.name}`} >
          {this.props.post_type.name}
        </a>
        <img className = "Marker" src = '/assets/posttype_marker.svg'/>
      </div>
    );
  }
}

export default A_posttype_marker

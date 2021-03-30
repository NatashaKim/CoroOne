import React from "react"
import PropTypes from "prop-types"
import A_post_type from "./A_post_type"
import '../../assets/stylesheets/M_post_types_nav.scss'


class M_post_types_nav extends React.Component {
  render () {
    return (
      <div className = "post_types_nav h6">
        <A_post_type post_type = {this.props.post_types[0]} postTypeStyle = 'menu'/>
        <A_post_type post_type = {this.props.post_types[3]} postTypeStyle = 'menu'/>
        <A_post_type post_type = {this.props.post_types[2]} postTypeStyle = 'menu'/>
        <A_post_type post_type = {this.props.post_types[6]} postTypeStyle = 'menu'/>
        <A_post_type post_type = {this.props.post_types[1]} postTypeStyle = 'menu'/>
      </div>
    );
  }
}

export default M_post_types_nav

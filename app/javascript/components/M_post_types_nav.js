import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_post_types_nav.scss'


class M_post_types_nav extends React.Component {
  render () {
    return (
      <div className = "post_types_nav">
          {this.props.post_types.map(post_type => (
            <div key={post_type.id}>
              <a href={`/posts?post_type=${post_type.name}`} > {`${post_type.name}`}</a>
            </div>
          ))}
      </div>
    );
  }
}

export default M_post_types_nav

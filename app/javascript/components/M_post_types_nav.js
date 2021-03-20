import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_post_types_nav.scss'


class M_post_types_nav extends React.Component {
  render () {
    return (
      <div className = "post_types_nav">
          {this.props.categories.map(category => (
            <div key={category.id}>
              <a href={`/posts?category=${category.name}`} > {`${category.name}`}</a>
            </div>
          ))}
      </div>
    );
  }
}

export default M_post_types_nav

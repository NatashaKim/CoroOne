import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_category_nav.scss'


class M_category_nav extends React.Component {
  render () {
    return (
      <div>
          {this.props.categories.map(category => (
            <div key={category.id}>
            <a href={`/posts?category=${category.name}/`} > {`${category.name}`}</a>
            </div>
          ))}
        </div>
    );
  }
}

export default M_category_nav

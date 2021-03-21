import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'


class M_categories_nav extends React.Component {
  render () {
    return (
      <div className = "category_nav">
        {this.props.categories.map(category => (
          <div key={category.id}>
            <a className = "category_nav_a" href={`/posts?category=${category.name}`} > {`${category.name}`}</a>
          </div>
         ))}
      </div>
    );
  }
}

export default M_categories_nav

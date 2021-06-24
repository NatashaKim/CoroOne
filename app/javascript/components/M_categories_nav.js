import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'


class M_categories_nav extends React.Component {

  render () {
    let categories = this.props.categories.filter(c => c.post_type_id ==this.props.post_type_id);

    let post_type = '';
    if (this.props.post_type_name) {
      post_type = this.props.post_type_name
    }
    return (
      <div className = "category_nav">
        {categories.map(category => (
          <div key={category.id}>
            <a className = "category_nav_a" href={`/posts/by_type/${post_type}?category=${category.name}`} > {`${category.name}`} </a>
          </div>
         ))}
      </div>
    );
  }
}

export default M_categories_nav

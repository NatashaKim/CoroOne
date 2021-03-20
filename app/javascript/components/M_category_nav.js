import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_category_nav.scss'


class M_category_nav extends React.Component {
  render () {
    let categoryNav='';
    if (this.props.post) {
      categoryNav = this.props.category.name
    } else {
      categoryNav = this.props.categories.map(category => (
        <div key={category.id}>
          <a className = "category_nav_a" href={`/posts?category=${category.name}`} > {`${category.name}`}</a>
        </div>
      ));
    }
    return (
      <div className = "category_nav">{categoryNav}</div>
    );
  }
}

export default M_category_nav

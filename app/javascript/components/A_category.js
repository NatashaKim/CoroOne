import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_category.scss'


class A_category extends React.Component {
  render () {
    let category = '';
    if (this.props.post) {
      category = this.props.category.name
    }
    return (
      <div className = "category">{category}</div>
    );
  }
}

export default A_category

import React from "react"
import PropTypes from "prop-types"
class M_catview extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.category.name}</h1>
            <p><strong>ID:</strong> {this.props.category.id}</p>
            <p><strong>Name:</strong> {this.props.category.name}</p>
            <p><strong>Description:</strong> {this.props.category.description}</p>
            <p><strong>Display in Navbar:</strong> {`${this.props.category.display_in_navbar}`}</p>
            <a href={`/categories/${this.props.category.id}/edit`}>Edit</a><span> | </span>
            <a href={`./`}>Back</a>
      </div>
    );
  }
}

export default M_catview

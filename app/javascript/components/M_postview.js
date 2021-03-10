import React from "react"
import PropTypes from "prop-types"
class M_postview extends React.Component {
  render() {
    let categoryTag='';

    if (this.props.category) {
  categoryTag = <p>Category:{this.props.category.name}</p>;
}
    return (
      <div>
        <h1>{this.props.post.title}</h1>
            <p>Category_id:{`${this.props.post.category_id}`}</p>

            {categoryTag}
            <p>ID: {`${this.props.post.id}`}</p>
            <p>Author: {`${this.props.post.author}`}</p>
            <p>Content: {`${this.props.post.content}`}</p>
      </div>
    );
  }
}

export default M_postview

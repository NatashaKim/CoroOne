import React from "react"
import PropTypes from "prop-types"

class T_reviews_page extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        posts: null
      }
      get_posts_by_type(this.props.post_type_id, this.props.post_number).then((u)=>{
        this.setState({posts: u})
      })
}

  render () {
    return (
      <div className = "Reviews_grid">
        {parts}
      </div>
    );
  }
}

export default O_reviews_preview

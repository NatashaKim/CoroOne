import React from "react"
import PropTypes from "prop-types"
import M_release_favorites from "./M_release_favorites"


class O_release_favorites extends React.Component {

  render () {

    let releasePosts = this.props.posts.filter(c => c.release_date !== null);

    return (
      <div>
        {releasePosts.map(post => (
          <M_release_favorites
            key = {post.id}
            post = {post}
          />
        ))}
      </div>
    );
  }
}

export default O_release_favorites

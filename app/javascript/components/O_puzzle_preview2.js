import React from "react"
import PropTypes from "prop-types"
import M_post_preview from "./M_post_preview"
import A_post_type from "./A_post_type"
import {get_posts_by_type} from './Api.js'

const PLACES = [
  'get_posts_by_type',
  'article'
]

class O_puzzle_preview2 extends React.Component {

  render () {

    let postNumber = 0;

    let checkPuzzlePlace = PLACES.includes(this.props.puzzlePlace)
    ? this.props.puzzlePlace : PLACES[0]

    return (
        <div className = {`Puzzle_grid ${checkPuzzlePlace}`}>
          {this.props.posts.map(post => (
            <M_post_preview key = {post.id} post = {post} category = {post.category} post_number = {postNumber = postNumber + 1} postStyle = 'ps--horizontal' post_type_id = {this.props.post_type_id}  />
          ))}
        </div>
    );
  }
}

export default O_puzzle_preview2

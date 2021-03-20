import React from "react"
import PropTypes from "prop-types"
import M_category_nav from "./M_category_nav"
import A_hashtag from "./A_hashtag"
class M_postview extends React.Component {
  render() {
    let categoryTag='';

    if (this.props.category) {
      categoryTag = <p>Category:{this.props.category.name}</p>;
    }

    let myRe = new RegExp("#\\w+", "g");
    let myArray = [];
    let tag = null;
    while((tag = myRe.exec("#abc, #haefg #hij")) != null){
      myArray.push(tag[0]);
    }

    return (
      <div>
        <h1>{this.props.post.title}</h1>
            <p>Category_id:{`${this.props.post.category_id}`}</p>

            {categoryTag}
            <M_category_nav categories = {this.props.categories} post = {this.props.post} category = {this.props.category}/>
            <A_hashtag post = {this.props.post}/>
            <p>ID: {`${this.props.post.id}`}</p>
            <p>Author: {`${this.props.post.author}`}</p>
            <p>Content: {`${this.props.post.content}`}</p>
      </div>
    );
  }
}

export default M_postview

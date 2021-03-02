import React from "react"
import axios from 'axios';
import PropTypes from "prop-types"
import A_select from "./A_select"
import {availableCategories} from './Api.js';
class M_postform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        category_id: props.post.category_id ? props.post.category_id : '',
        name: props.post.name ? props.post.name : '',
        title: props.post.title ? props.post.title : '',
        author: props.post.author ? props.post.author : '',
        content: props.post.content ? props.post.content : '',
        image: props.post.image ? props.post.image : '',
        categories: []

}
    ;
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);

    }

    handleCategoryChange(e) {
      this.setState({ category_id: e.target.value });
    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleTitleChange(e) {
      this.setState({ title: e.target.value });
    }
    handleAuthorChange(e) {
      this.setState({ author: e.target.value });
    }
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }
    handleImageChange(e) {
      this.setState({ image: e.target.value });
    }








    componentDidMount() {
      availableCategories()
          .then(res => {
              this.setState({
                  categories: res.Categories.name
              })
              console.log("hello", this.state.categories)
          })
     }

    render() {
      return (
        <div>

            <A_select
             title={"Category"}
             name="category[name]"
             value={this.state.category}
             placeholder={"Select"}
             handleChange={this.handleInput}
             options={this.state.categories}
          />

          <label>Name</label>
          <input
            type="text"
            name="post[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label>Title</label>
          <input
            type="text"
            name="post[title]"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />

          <label>Author</label>
          <input
            type="text"
            name="post[author]"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />

          <label>Content</label>
          <input
            type="text"
            name="post[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />

          <input type="submit" value="Create category" />
        </div>
      );
    }
  }

export default M_postform

import React from "react"
import axios from 'axios';
import PropTypes from "prop-types"
import A_select from "./A_select"
import A_input from "./A_input"
import A_textarea from "./A_textarea"
import {availablePostTypes} from './Api.js';
class M_catform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category.name ? props.category.name : '',
      description: props.category.description ? props.category.description : '',
      imagesrc: props.category.imagesrc ? props.category.imagesrc : '',
      post_type_id: props.category.post_type_id ? props.category.post_type_id : '',
      post_types: props.post_types ? props.post_types : []
    };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleImagesrcChange = this.handleImagesrcChange.bind(this);
      this.handlePostTypeChange = this.handlePostTypeChange.bind(this);

    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handlePostTypeChange(e) {
      this.setState({ post_type_id: e.target.value });
    }
    handleImagesrcChange(e) {
      this.setState({ imagesrc: e.target.value });
    }

    render() {
      return (
        <div>
          <label>Name</label>
          <A_input
            name="category[name]"
            value={this.state.name}
            handleChange={this.handleNameChange.bind(this)}
            inputTypes = "default"
          />

          <label>
          Description
          </label>
          <A_textarea
            name="category[description]"
            value={this.state.description}
            handleChange={this.handleDescriptionChange.bind(this)}
          />

          <label>
          Image Src
          </label>
          <A_input
            name="category[imagesrc]"
            value={this.state.imagesrc}
            handleChange={this.handleImagesrcChange.bind(this)}
            inputTypes = "default"
          />

          <label>Display in Navbar?</label>
          <input
            defaultChecked={this.props.category.display_in_navbar ? this.props.category.display_in_navbar : false}
            ref={this.input}
            type="checkbox"
            name="category[display_in_navbar]"
          />

          <A_select
           title={"Post type"}
           name="category[post_type_id]"
           value={this.state.post_type}
           placeholder={"Select"}
           handleChange={this.handlePostTypeChange}
           options={this.state.post_types}
        />

          <input type="submit" value="Create category" />
        </div>
      );
    }
  }

export default M_catform

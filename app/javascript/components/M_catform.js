import React from "react"
import axios from 'axios';
import PropTypes from "prop-types"
import A_select from "./A_select"
import A_input from "./A_input"
import {availablePostTypes} from './Api.js';
class M_catform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.category.name ? props.category.name : '',
        description: props.category.description ? props.category.description : '',
        post_type_id: props.category.post_type_id ? props.category.post_type_id : '',
        post_types: props.post_types ? props.post_types : []
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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

    render() {
      return (
        <div>
          <label>Name</label>
          <A_input
            type="text"
            name="category[name]"
            value={this.state.name}
            handleChange={this.handleNameChange.bind(this)}
          />

          <label>Description</label>
          <input
            type="text"
            name="category[description]"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
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

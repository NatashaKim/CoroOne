import React from "react"
import PropTypes from "prop-types"
class M_catform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.category.name ? props.category.name : '',
        description: props.category.description ? props.category.description : '',
        post_type_id: props.category.post_type_id ? props.category.post_type_id : ''
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
          <input
            type="text"
            name="category[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
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

          <label>postType</label>
          <input
            type="text"
            name="category[post_type_id]"
            value={this.state.post_type_id}
            onChange={this.handlePostTypeChange}
          />

          <input type="submit" value="Create category" />
        </div>
      );
    }
  }

export default M_catform

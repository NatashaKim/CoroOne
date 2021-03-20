import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_textarea.scss'

class A_textarea extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: props.value ? props.value : '',
      };
      this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
    render() {
      return (
        <textarea
          className = "textarea"
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
      );
    }
  }

export default A_textarea

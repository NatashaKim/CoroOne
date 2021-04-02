import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_textarea.scss'

const TYPES = [
  'textarea--small',
  'textarea--hidden'
]

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
      const textareaType = " "

      const checkTextareaType = TYPES.includes(this.props.textareaType)
      ? this.props.textareaType : TYPES[0]
      return (
        <textarea
          className = {`textarea ${checkTextareaType}`}
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
      );
    }
  }

export default A_textarea

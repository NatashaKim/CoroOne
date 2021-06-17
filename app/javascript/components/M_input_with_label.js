import React from "react"
import PropTypes from "prop-types"
import A_label from "./A_label"
import A_input from "./A_input"


class M_input_with_label extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: props.value ? props.value : ''
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

  render () {
    let inputLabelDirection = "";

    if (this.props.inputPlace == 'registration') {
      inputLabelDirection = 'Input_label_horizontal';
    } else {
      inputLabelDirection = 'Input_label_vertical';
    }

    return (
      <div className={`Input_with_label ${inputLabelDirection}`}>
        <A_label
          label = {this.props.label}/>
       <A_input
          inputTypes = {this.props.inputTypes}
          inputPlace = {this.props.inputPlace}
          autocomplete = {this.props.autocomplete}
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}/>
      </div>
    );
  }
}

export default M_input_with_label

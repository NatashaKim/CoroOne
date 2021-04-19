import React from "react"
import PropTypes from "prop-types"
import A_label from "./A_label"
import A_image_input from "./A_image_input"


class M_image_input_with_label extends React.Component {
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
      <div className={`Image_input_with_label ${inputLabelDirection}`}>
        <A_label
          label = {this.props.label}/>
       <A_image_input
          inputPlace = {this.props.inputPlace}
          name={this.props.name}
          onChange={this.handleChange}
          limitation = {this.props.limitation}/>
      </div>
    );
  }
}

export default M_image_input_with_label

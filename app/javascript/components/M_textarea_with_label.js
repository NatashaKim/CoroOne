import React from "react"
import PropTypes from "prop-types"
import A_label from "./A_label"
import A_textarea from "./A_textarea"


class M_textarea_with_label extends React.Component {
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
    return (
      <div className={`Input_with_label`}>
        <A_label
          label = {this.props.label}/>
       <A_textarea
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}/>
      </div>
    );
  }
}

export default M_textarea_with_label

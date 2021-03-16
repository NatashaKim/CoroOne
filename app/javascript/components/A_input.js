import React from "react"
import PropTypes from "prop-types"
class A_input extends React.Component {
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
        <div>
          <input
            type="text"
            name={this.props.name}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }

export default A_input

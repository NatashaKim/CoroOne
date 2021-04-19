import React from "react"
import PropTypes from "prop-types"
import A_label from "./A_label"
import A_select from "./A_select"


class M_select_with_label extends React.Component {
  render () {
    return (
      <div className={`Input_with_label`}>
        <A_label
          label = {this.props.label}/>
       <A_select
         id={this.props.id}
         name={this.props.name}
         value={this.props.value}
         handleChange={this.props.handleChange}
         name={this.props.name}
         options = {this.props.options}
         placeholder = {this.props.placeholder}/>
      </div>
    );
  }
}

export default M_select_with_label

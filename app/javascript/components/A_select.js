import React from "react"
import PropTypes from "prop-types"

const A_select = props => {
  return (

      <select
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option.id} value={option.id} label={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
  );
};

export default A_select

import React from "react"
import PropTypes from "prop-types"

const A_debug = ({ aObject }) => {
    if (!aObject) return "";
    if (typeof aObject == "object")
    return (
        <div className='gameStatistics'>
            {
                Object.entries(aObject).map(([key, val]) =>
                    <h2 key={key}>{key}: <A_debug aObject = {val}/></h2>
                )
            }
        </div>);
        return (<div> {aObject}
        </div>);
};

export default A_debug

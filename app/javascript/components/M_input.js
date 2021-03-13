import React from 'react'
import A_button from './A_button.js'


const M_input = ({
  btnName
}) => {
    return (
      <div>
          <A_button
          type ='button'
          buttonStyle = 'btn--default'
          buttonSize = 'btn--medium'
          buttonColor = 'btn--blue'>
          {btnName}
          </A_button>
          <A_button
          type ='button'
          buttonStyle = 'btn--default'
          buttonSize = 'btn--small'
          buttonColor = 'btn--green'>
          {btnName}
          </A_button>
          <A_button
          type ='button'
          buttonStyle = 'btn--default'
          buttonSize = 'btn--large'
          buttonColor = 'btn--gray'>
          {btnName}
          </A_button>
          <A_button
          type ='button'
          buttonStyle = 'btn--default'
          buttonSize = 'btn--large'>
          {btnName}
          </A_button>
          <A_button
          type ='button'
          buttonStyle = 'btn--default'
          buttonSize = 'btn--large'>
          {btnName}
          </A_button>
          <A_button
          type ='button'
          buttonStyle = 'btn--default'
          buttonSize = 'btn--large'>
          {btnName}
          </A_button>
      </div>
    )
}

export default M_input

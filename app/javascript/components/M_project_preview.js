import React from 'react'
import A_button from './A_button.js'
import A_post_title from './A_post_title.js'



const M_project_preview = ({
  btnName,
  postTitle
}) => {
    return (
      <div>
          <A_post_title
            type = 'span'
            headingWeight = 'heading--bold'
            headingSize = 'heading--24'
            headingColors = 'heading--white'
            headingAlign = 'heading--center'>
            {postTitle}
          </A_post_title>
          <A_button
            type ='button'

            buttonSize = 'btn--medium'
            buttonColor = 'btn--blue'>
            {btnName}
          </A_button>
          <A_button
            type ='button'

            buttonSize = 'btn--small'
            buttonColor = 'btn--green'>
           {btnName}
          </A_button>
          <A_button
            type ='button'

            buttonSize = 'btn--large'
            buttonColor = 'btn--gray'>
           {btnName}
          </A_button>
          <A_button
            type ='button'

            buttonSize = 'btn--medium'
            buttonColor = 'btn--blue'>
            {btnName}
          </A_button>
          <A_button
            type ='button'
            buttonColor = 'btn--minor'
            buttonSize = 'btn--medium'>
            {btnName}
          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--small'
            buttonColor = 'btn--gray'>
            {btnName}
          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--small'
            buttonColor = 'btn--text'>
            {btnName}
          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--medium'
            buttonColor = 'btn--text'>
            {btnName}
          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--medium'
            buttonColor = 'btn--create'>
            {btnName}
          </A_button>
      </div>
    )
}

export default M_project_preview

import React from 'react'
import A_button from './A_button.js'
import A_title from './A_title.js'


const M_input = ({

}) => {

    return (
      <div>

          <A_title
            type = 'span'
            headingWeight = 'heading--bold'
            headingSize = 'heading--24'
            headingColors = 'heading--white'
            headingAlign = 'heading--center'>
            {postTitle}
          </A_title>
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

          </A_button>
          <A_button
            type ='button'
            buttonColor = 'btn--minor'
            buttonSize = 'btn--medium'>

          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--small'
            buttonColor = 'btn--gray'>

          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--small'
            buttonColor = 'btn--text'>

          </A_button>
          <A_button
            type ='button'
            buttonSize = 'btn--medium'
            buttonColor = 'btn--text'>

          </A_button>
          <A_button
            imgscr = '/assets/button_plus.svg'
            buttonColor = 'btn--create-smth'
            buttonSize = 'btn--img'>
          </A_button>
          <A_button
            imgscr = '/assets/button_add_photo.svg'
            buttonColor = 'btn--add-photo'
            buttonSize = 'btn--img'>
          </A_button>
          <A_button
            imgscr = '/assets/button_create_project.svg'
            type ='Создать проект'
            buttonColor = 'btn--create-project'
            buttonSize = 'btn--img'>
          </A_button>
          <A_button
            imgscr = '/assets/button_play.svg'
            buttonColor = 'btn--play'
            buttonSize = 'btn--img'>
          </A_button>
      </div>
    )
}

export default M_input

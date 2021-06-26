import React from "react"
import PropTypes from "prop-types"
import A_checkbox from "./A_checkbox"
import A_label from "./A_label"
import A_title from "./A_title"

class M_project_checklist extends React.Component {
  render() {
    return (
      <div className="Project_checklist_view">
        <A_title
          headingStyle = 'small3'
          headingColor = 'mineral-gray'
          headingAlign = 'center_align'
          title = "В проекте сделаны:"
        />
       <div className="project_cheklist_wr">
       <div className="project_cheklist_body">
        <div className="project_cheklist_row">
          <div><A_title
            headingStyle = 'small3'
            headingColor = 'mineral-gray'
            headingAlign = 'left_align'
            title = "Диздок"
          />
          </div>

         <div  className="Project_checklist_block">
            <div className={`Checklist_option ${this.props.project.idea_or_concept == true ? 'shozen' : 'default'}`}>
              Идея или концепт
            </div>
            <div className={`Checklist_option ${this.props.project.plot_and_characters == true ? 'shozen' : 'default'}`}>
              Сюжет и персонажи
            </div>
            <div className={`Checklist_option ${this.props.project.game_mechanics == true ? 'shozen' : 'default'}`}>
              Игровые механики
            </div>
          </div>

        </div>


         <div className="project_cheklist_row">
           <div><A_title
             headingStyle = 'small3'
             headingColor = 'mineral-gray'
             headingAlign = 'left_align'
             title = "Звук"
           />
           </div>


           <div  className="Project_checklist_block">
             <div className={`Checklist_option ${this.props.project.hero_voices == true ? 'shozen' : 'default'}`}>
               Голоса героев
             </div>
             <div className={`Checklist_option ${this.props.project.background_music == true ? 'shozen' : 'default'}`}>
               Фоновая музыка
             </div>
             <div className={`Checklist_option ${this.props.project.effects == true ? 'shozen' : 'default'}`}>
               Эффекты
             </div>
           </div>

         </div>




          <div className="project_cheklist_row">
            <div><A_title
              headingStyle = 'small3'
              headingColor = 'mineral-gray'
              headingAlign = 'left_align'
              title = "Код"
            />
            </div>


            <div  className="Project_checklist_block">
              <div className={`Checklist_option ${this.props.project.engine == true ? 'shozen' : 'default'}`}>
                Движок
              </div>
              <div className={`Checklist_option ${this.props.project.game_ai == true ? 'shozen' : 'default'}`}>
                Игровой ИИ
              </div>
              <div className={`Checklist_option ${this.props.project.three_d_and_animation == true ? 'shozen' : 'default'}`}>
                3D и анимация
              </div>
            </div>

          </div>






           <div className="project_cheklist_row">
             <div><A_title
               headingStyle = 'small3'
               headingColor = 'mineral-gray'
               headingAlign = 'left_align'
               title = "Графика"
             />
             </div>


             <div  className="Project_checklist_block">
               <div className={`Checklist_option ${this.props.project.characters == true ? 'shozen' : 'default'}`}>
                 Персонажи
               </div>
               <div className={`Checklist_option ${this.props.project.levels_and_worlds == true ? 'shozen' : 'default'}`}>
                 Уровни и миры
               </div>
               <div className={`Checklist_option ${this.props.project.objects == true ? 'shozen' : 'default'}`}>
                 Объекты
               </div>
             </div>
           </div>
        </div>

       </div>




      </div>
    );
  }
}

export default M_project_checklist

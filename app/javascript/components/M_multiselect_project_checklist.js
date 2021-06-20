import React from "react"
import PropTypes from "prop-types"
import A_checkbox from "./A_checkbox"
import A_label from "./A_label"

class M_multiselect_project_checklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea_or_concept: props.project.idea_or_concept ? props.project.idea_or_concept : false,
      plot_and_characters: props.project.plot_and_characters ? props.project.plot_and_characters : false,
      game_mechanics: props.project.game_mechanics ? props.project.game_mechanics : false,
      hero_voices: props.project.hero_voices ? props.project.hero_voices : false,
      background_music: props.project.background_music ? props.project.background_music : false,
      effects: props.project.effects ? props.project.effects : false,
      engine: props.project.engine ? props.project.engine : false,
      game_ai: props.project.game_ai ? props.project.game_ai : false,
      three_d_and_animation: props.project.three_d_and_animation ? props.project.three_d_and_animation : false,
      characters: props.project.characters ? props.project.characters : false,
      levels_and_worlds: props.project.levels_and_worlds ? props.project.levels_and_worlds : false,
      objects: props.project.objects ? props.project.objects : false
    }
  }

  render() {
    return (
      <div>
      
        <A_label
        label = "В проекте уже готовы "/>

        <A_checkbox
          label = "Идея или концепт"
          name ={ "project[idea_or_concept]" }
          checked = {this.state.idea_or_concept}
        />

        <A_checkbox
          label = "Сюжет и персонажи"
          name ={ "project[plot_and_characters]" }
          checked = {this.state.plot_and_characters}
        />

        <A_checkbox
          label = "Игровые механики"
          name ={ "project[game_mechanics]" }
          checked = {this.state.game_mechanics}
        />

        <A_checkbox
          label = "Голоса героев"
          name ={ "project[hero_voices]" }
          checked = {this.state.hero_voices}
        />

        <A_checkbox
          label = "Фоновая музыка"
          name ={ "project[background_music]" }
          checked = {this.state.background_music}
        />

        <A_checkbox
          label = "Эффекты"
          name ={ "project[effects]" }
          checked = {this.state.effects}
        />

        <A_checkbox
          label = "Движок"
          name ={ "project[engine]" }
          checked = {this.state.engine}
        />

        <A_checkbox
          label = "Игровой ИИ"
          name ={ "project[game_ai]" }
          checked = {this.state.game_ai}
        />

        <A_checkbox
          label = "3D и анимация"
          name ={ "project[three_d_and_animation]" }
          checked = {this.state.three_d_and_animation}
        />

        <A_checkbox
          label = "Персонажи"
          name ={ "project[characters]" }
          checked = {this.state.characters}
        />

        <A_checkbox
          label = "Уровни и миры"
          name ={ "project[levels_and_worlds]" }
          checked = {this.state.levels_and_worlds}
        />

        <A_checkbox
          label = "Объекты"
          name ={ "project[objects]" }
          checked = {this.state.objects}
        />
      </div>
    )
  }
}

export default M_multiselect_project_checklist

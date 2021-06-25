import React from "react"
import PropTypes from "prop-types"
import A_checkbox from "./A_checkbox"
import A_label from "./A_label"

class M_multiselect_genres extends React.Component {
  constructor(props) {
    super(props);

    let active_genres=[];

    if (props.active_genres) {
      props.genres.map(genre => {
       active_genres["g_"+genre.id]=props.active_genres.findIndex((element, index, array) => {return element.genre_id == genre.id}) >=0;
      });
    }

    this.state = {
      active_genres: active_genres,
      genres: props.genres ? props.genres : [],
    }
  }

  render() {
    return (
      <div>
        <A_label
        label = "Жанры"/>
  
        {this.state.genres.map(genre => {
           let id = "g_"+genre.id;

            return (
              <A_checkbox
                label = {genre.name}
                name ={ "genres[g_"+genre.id+"]" }
                checked = {this.state.active_genres[id]}
              />

           )
         }
       )}
       </div>
    )
  }
}

export default M_multiselect_genres

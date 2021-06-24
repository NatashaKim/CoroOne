import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/M_categories_nav.scss'
import M_genres_nav from "./M_genres_nav"
import O_news_preview from "./O_news_preview"
import O_puzzle_preview2 from "./O_puzzle_preview2"
import M_categories_nav from "./M_categories_nav"
import M_post_preview from "./M_post_preview"
import M_post_types_nav from "./M_post_types_nav"

import {get_posts_by_type} from './Api.js'


const top_slice = 4;

class T_news_preview extends React.Component {

  constructor(props) {
      super(props);
      this.state={
        posts: null
      }


      get_posts_by_type(1, this.props.post_number,this.props.category).then((u)=>{
        this.setState({posts: u})
      });

}


  render () {

    if (!this.state.posts) {return ""}
    let all_posts = this.state.posts;

    let puzzle_posts = all_posts.slice(0, 4);
    let banner = all_posts.slice(4, 5)[0];
    let rest_posts = all_posts.slice(5,[this.state.posts.length - 1]);

    let banner_html = "";
    if(banner)banner_html=(<M_post_preview
      postStyle = 'ps--screen'
      post = {banner}
      category = {banner.category}
    />);

    return (
      <div className = "News_page">
        <div class="Post_type_header">
          <M_post_types_nav
            post_types = {this.props.post_types}
          />
          <M_categories_nav
            categories = {this.props.categories}
            post_type_id = "1"
            post_type_name = "Новости"
          />
          <O_puzzle_preview2
            post_type_id = {this.props.post_type_id}
            posts = {puzzle_posts}
          />
          {banner_html}

        </div>
        <div class="Post_type_section_wrapper">
          <O_news_preview
            post_type_id = {this.props.post_type_id}
            post_number = {this.props.post_number}
            genres = {this.state.selected_genres}
            owner = {this}
            category={this.props.category}
            posts = {rest_posts}
          />
        </div>
      </div>
    );
  }
}

export default T_news_preview

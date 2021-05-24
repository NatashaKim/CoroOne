import React from 'react';

import axios from 'axios';
export function availableCategories() {
   return axios.get('/categories.json').then(
     function (response) {
      return response.data;
   })
}

export function availablePostTypes() {
   return axios.get('/post_types.json').then(
     function (response) {
      return response.data;
   })
}

export function getuser(user_id) {
   return axios.get('/users/' + user_id + '/getuser').then(
     function (response) {
      return response.data;
   })
}

export function get_posts_by_type(post_type_id, count) {
   return axios.get('/posts_by_type/' + post_type_id + '/count/' + count).then(
     function (response) {
      return response.data;
   })
}

export function get_posts_by_category(post_type_id, category_id) {
   return axios.get('/posts_by_type/' + post_type_id + '/category/' + category_id).then(
     function (response) {
      return response.data;
   })
}

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

export function getpost_type(post_type_id) {
   return axios.get('/post_types/' + post_type_id + '/getpost_type').then(
     function (response) {
      return response.data;
   })
}

export function get_posts_by_type(post_type_id, count, category) {
  let url = '/posts_by_type/' + post_type_id + '/count/' + count;
  if(category) url=url+'?category='+category;
   return axios.get(url).then(
     function (response) {
      return response.data;
   })
}

export function get_posts_by_type_and_genre(post_type_id, genre) {
   return axios.get('/posts_by_type_and_genre/' + post_type_id + '/genre/' + genre).then(
     function (response) {
      return response.data;
   })
}

export function get_posts_by_type_and_user(post_type_id, user_id) {
   return axios.get('/posts_by_type_and_user/' + post_type_id + '/user/' + user_id).then(
     function (response) {
      return response.data;
   })
}

export function get_projects_by_user(user_id) {
   return axios.get('/projects_by_user/' + user_id).then(
     function (response) {
      return response.data;
   })
}

export function get_newest_projects() {
   return axios.get('/newest_projects').then(
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

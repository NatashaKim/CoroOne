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

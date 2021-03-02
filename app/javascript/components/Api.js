import React from 'react';

import axios from 'axios';
export function availableCategories() {
   return axios.get('/categories').then(function (response) {
      return response.data;
   })
}

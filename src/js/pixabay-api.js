// Described in the documentation
import iziToast from 'izitoast';
// Optional import of styles
import 'izitoast/dist/css/iziToast.min.css';

import { renderPhotos } from './render-functions.js';

var API_KEY = '47376754-ed05d64ddcb60a2a475f4c9e7';
const searchButton = document.querySelector('button');
const loader = document.querySelector('span');

export function fetchFunction(
  q,
  image_type = 'photo',
  orientation = 'horizontal',
  safesearch = true
) {
  loader.style.display = 'inline-block';
  fetch(
    'https://pixabay.com/api/?key=' +
      API_KEY +
      '&q=' +
      encodeURIComponent(q) +
      '&image_type=' +
      encodeURIComponent(image_type) +
      '&orientation=' +
      encodeURIComponent(orientation) +
      '&safesearch=' +
      encodeURIComponent(safesearch)
  )
    .then(response => {
      // Response handling
      response => response.json();
      //   console.log(response);
      return response.json();
    })
    .then(data => {
      // Data handling
      data => data.json();
      //   console.log(data);

      if (data.totalHits > 0) {
        // console.log(data.hits);
        data.hits.forEach(element => {
          console.log(
            element.largeImageURL,
            element.previewURL,
            element.tags,
            element.likes,
            element.views,
            element.comments,
            element.downloads
          );
          renderPhotos(
            element.largeImageURL,
            element.previewURL,
            element.tags,
            element.likes,
            element.views,
            element.comments,
            element.downloads
          );
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: 'No results for this search',
          position: 'topRight',
        });
      }
      console.log('xd');
      searchButton.disabled = false;
      loader.style.display = 'none';
    })
    .catch(error => {
      // Error handling
    });
}

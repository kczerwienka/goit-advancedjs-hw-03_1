// Described in the documentation
import iziToast from 'izitoast';
// Optional import of styles
import 'izitoast/dist/css/iziToast.min.css';

import { fetchFunction } from './js/pixabay-api.js';

const searchButton = document.querySelector('button');
const inputBar = document.querySelector('input');

searchButton.addEventListener('click', event => {
  searchButton.disabled = true;
  if (!inputBar.value) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter search value',
      position: 'topRight',
    });
  } else {
    fetchFunction(inputBar.value);
  }
});

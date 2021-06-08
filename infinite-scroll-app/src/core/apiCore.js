import { API } from "../config";
import axios from 'axios';

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getPhotos = (page, successHandler, errorHandler) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      .then(response => {
        successHandler(response);
      })
      .catch(function(error) {
        errorHandler(error);
      });
};
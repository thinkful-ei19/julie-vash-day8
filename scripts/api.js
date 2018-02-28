'use strict';
/* global store, api, $*/

//eslint-disable-next-line no-unused-vars
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tj';
  const getItems = function(callback){

    $.getJSON(`${BASE_URL}/items`, callback);//Added this to make arrays show up
  };
  const createItem = function(name, callback) {
    const newItem = JSON.stringify({name: name});
  
    const testData = {
      url: BASE_URL + '/items',
      method: 'POST',
	  contentType: 'application/json',
	  dataType: 'JSON',
      data: newItem,
      success: callback
    };

    $.ajax(testData);
  };

  return {
    getItems,
    createItem
  };
}());
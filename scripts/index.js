'use strict';
/* global shoppingList, store, api, Item $*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems((items) => {
    
    items.forEach((item) => store.addItem(item));
    // const item = store.items[0];
    // console.log(store.items);
    // console.log('current name: ' + item.name);
    // store.findAndUpdate(item.id, { name: 'windex' });
    // console.log('new name: ' + item.name);
    shoppingList.render();
  });

});



// store.items.push(Item.create('apples'));


// api.getItems(function(data) {
//   console.log(data);
// });

// console.log(api.BASE_URL);

// api.createItem('pears', (newItem) => {
//   //console.log(newItem);
//   api.getItems((items) => {
//     console.log('items', items);
//   });
// });


// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, { name: 'foobar' }, () => {
//     console.log('updated!');
//   });
// });

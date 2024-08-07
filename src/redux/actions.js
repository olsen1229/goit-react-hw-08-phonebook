//import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';



// javascript naming convention
// it is recommended to use ALL_CAPS case with undesrcore as the word separator for string constants
// SCREAMING_SNAKE_CASE

// Action Types
export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

// Action Generators
// this creates the action objects that describe how the state will change when the action generator is called

// export const addContact = ({ name, number }) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: nanoid(), // this is coming from the nanoid library and generates a random ID automatically for each contact
//     name,
//     number,
//   },
// });

// export const deleteContact = id => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// export const setFilter = filter => ({
//   type: SET_FILTER,
//   payload: filter,
// });

// Implicit Return
// const sampleImplicitFn = () => ({}); // function that directly returns something
// // hence using parenthesis

// // Explicit Return
// const sampleExplicitFn = () => {
//   return {};
// };

// Actions declaration using the createAction(type) function


export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');
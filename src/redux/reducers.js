//import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';


const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilterState = '';

// export const contactsReducer = (state = initialContactsState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];
//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = initialFilterState, action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// root reducer is the combination of all reducers in a single application

// Reducers declaration using the createReducer function from redux JS toolkit


// the create reducer function takes two arguments
// first is the initial state object
// second is the object with dynamic keys [] containing the reducers

export const contactsReducer = createReducer(initialContactsState, {
  // this syntax refers to dynamic object keys and not arrays
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

export const filterReducer = createReducer(initialFilterState, {
  // this syntax refers to dynamic object keys and not arrays
  [setFilter]: (state, action) => action.payload,
});
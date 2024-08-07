import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialContactsState = {
  contacts: [],
  // Add two states to identify the pending and error states of the fetch promises
  isLoading: false,
  error: null,
};

// the create slice function accepts only one object parameter
// this object parameter includes the combination of the action and reducer declaration
// has three required properties that we have to supply in the parameter object

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,

  // we passed the reducer property in the parameter object
  // the reducer object has two properties inside of it which are the action generations

  reducers: {
    // for each action type, we will declare a reducer and/OR the prepare function
    // reducer function is responsible for modifying the actual state
    // prepare function is responsible for describing the action payload
    // addContact: {
    //   reducer(state, action) {
    //     state.contacts.push(action.payload);
    //   },
    //   prepare({ name, number }) {
    //     return { payload: { id: nanoid(), name, number } };
    //   },
    // },
    // deleteContact: {
    //   reducer(state, action) {
    //     const index = state.contacts.findIndex(
    //       contact => contact.id === action.payload
    //     );
    //     if (index !== -1) {
    //       state.contacts.splice(index, 1);
    //     }
    //   },
    // },
    // for asynchronous action generators
    // we have to declare three action generators corresponding to each phase of the Javascript async promise namely: fulfilled, rejected, pending
    // fetchingContactsInProgress: {
    //   reducer(state) {
    //     state.isLoading = true;
    //   },
    // },
    // fetchingContactsSuccess: {
    //   reducer(state, action) {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.contacts = action.payload;
    //   },
    // },
    // fetchingContactsError: {
    //   reducer(state, action) {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
    // },
  },

  // REDUCERS
  // handles direct action declaration inside of the reducer function
  // associated with synchronous action generators

  // EXTRA REDUCERS
  // handles indirect action declaration (meaning action generators declared outside the createSlice function)
  // associated with asynchronous action generators

  // extraReducers should be used together with the builder function
  // the syntax for the builder function is an arrow function taking the builder object as its parameter
  // we will then use different function from the builder object to chain methods declaring asynchronous action generators

  // ADD CASE function
  // this is a function from the builder object that allows us to chain the asynchronous action generators
  // takes two parameters: first is the action generator with the promise phase, second is an arrow function returning an object referring to the description of the change in state (action generator)
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// meaning of chaining functions
// we will chain the function calls
// addCase().addCase().addCase()
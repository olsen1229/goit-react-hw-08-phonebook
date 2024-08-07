// src/redux/selectors.js

import { createSelector } from '@reduxjs/toolkit';

// selector that retrieves the contacts portion or slice of the initialState
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// selector that retrieves the filter portion or slice of the initialState
export const selectFilter = state => state.filter;

// CREATE SELECTOR SYNTAX
// const compositeSelector = createSelector([], () => {})

// Convert the contacts selector to a composite selector
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // make sure that the filter string is existing first before filtering
    // if the filter string does not exist, return the original contacts

    // EARLY RETURN PATTERN
    // this is a best practice in software development
    // we must check first if all dependencies are existing before doing the operation
    // if one dependency does not exist, immediately return a default value
    if (!filter) {
      return contacts;
    }

    // if the filter string dependency is present, generate the lower case filter to normalize the search query
    const lowerCaseFilter = filter.toLowerCase();

    // filter the visible contacts
    const visibleContacts = contacts.filter(contact => {
      // convert the contact to all lower cases
      const lowerCaseContact = contact.toLowerCase();

      // compare if the lower case contact is the same to the lower case filter
      return lowerCaseContact.includes(lowerCaseFilter);
    });

    // return the visible contacts after filtering
    return visibleContacts;
  }
);
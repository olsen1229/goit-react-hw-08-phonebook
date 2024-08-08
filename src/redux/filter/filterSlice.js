//src/redux/slices/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

//Define initial state for filter
const initialFilterState = '';

//Create slice for filter

// createSlice({name, initialState, reducers})

// reducers = { actionGenerator1, actionGenerator2 }

// actionGenerator = { reducerFunction, prepareFunction }

// reducerFunction - alter or modify or update the state -- SETSTATE

// prepareFunction - describes the change that will be applied to the existing state

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
});

// Export actions
export const { setFilter } = filterSlice.actions;
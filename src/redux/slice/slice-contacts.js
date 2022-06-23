import { createSlice } from '@reduxjs/toolkit';
import * as operations from '../operations/operations-contacts';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [operations.fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = 'idle';
      const data = payload;
      state.items = data;
    },
    [operations.addContact.fulfilled]: (state, { payload }) => {
      state.status = 'idle';
      state.items.push(payload);
    },
    [operations.deleteContact.fulfilled]: (state, { payload }) => {
      state.status = 'idle';
      state.items = state.items.filter(item => item.id !== payload.id);
    },
    [operations.fetchContacts.pending]: state => {
      state.status = 'loading';
    },
    [operations.addContact.pending]: state => {
      state.status = 'creating';
    },
    [operations.deleteContact.pending]: state => {
      state.status = 'deleting';
    },
    [operations.fetchContacts.rejected]: (state, { error }) => {
      state.error = error;
      state.status = 'idle';
    },
    [operations.addContact.rejected]: (state, { error }) => {
      state.error = error;
      state.status = 'idle';
    },
    [operations.deleteContact.rejected]: (state, { error }) => {
      state.error = error;
      state.status = 'idle';
    },
  },
});

export default contactsSlice.reducer;

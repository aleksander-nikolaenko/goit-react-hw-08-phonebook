import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slice/slice-contacts';
import filterReducer from './slice/slice-filter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});

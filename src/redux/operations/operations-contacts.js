import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await contactsApi.fetchContacts();
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const response = await contactsApi.addContact(contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const response = await contactsApi.deleteContact(id);
    return response.data;
  }
);

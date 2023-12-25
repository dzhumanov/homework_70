import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { RootState } from "../../app/store";
import { ContactsList } from "../../types";

export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  const response = await axiosApi.get<ContactsList>("contacts.json");
  return response.data;
});

export const createNewContact = createAsyncThunk<void, undefined, {state: RootState}>('contacts/new', async (_, thunkAPI) => {
  const contact = thunkAPI.getState().contacts.newContact;
  await axiosApi.post('contacts.json', contact);
})

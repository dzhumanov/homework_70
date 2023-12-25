import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { RootState } from "../../app/store";
import { ContactsList } from "../../types";

export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  const response = await axiosApi.get<ContactsList>("contacts.json");
  return response.data;
});

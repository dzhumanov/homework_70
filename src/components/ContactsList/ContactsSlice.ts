import { createSlice } from "@reduxjs/toolkit";
import { ContactsList } from "../../types";
import { fetchContacts } from "./ContactsThunks";

interface contactsState {
  contacts: ContactsList | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: contactsState = {
  contacts: null,
  isLoading: false,
  isError: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const {} = contactsSlice.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contact, ContactsList } from "../../types";
import { fetchContacts } from "./ContactsThunks";

interface contactsState {
  contacts: ContactsList | null;
  isLoading: boolean;
  isError: boolean;
  newContact: Partial<Contact>;
  modalContact: Contact | null;
}

const initialState: contactsState = {
  contacts: null,
  isLoading: false,
  isError: false,
  newContact: {},
  modalContact: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    newContact: (state, action: PayloadAction<Partial<Contact>>) => {
      state.newContact = {...state.newContact, ...action.payload};
    },
    selectContact: (state, action: PayloadAction<Contact | null>) => {
      state.modalContact = action.payload;
    }
  },
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
export const {newContact, selectContact} = contactsSlice.actions;

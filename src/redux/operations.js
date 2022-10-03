import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://633593bbea0de5318a168237.mockapi.io';


export const fetchContact = createAsyncThunk(
  "contacts/fetchContact",
  async (_, thunkALI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (error) {
      return thunkALI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkALI) => {
    try {
      const responce = await axios.post("/contacts", data);
      return responce.data
    } catch (error) {
      return thunkALI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkALI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      return responce.data
    } catch (error) {
      return thunkALI.rejectWithValue(error.message);
    }
  }
)




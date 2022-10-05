import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./operations";


const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: ''
    },
    reducers: {
        // filter
        filterContacts(state, { payload }) {
            return { ...state, filter: payload };
        }
    },
    extraReducers: {
        // fetchContact
        [fetchContact.pending]: (state, _) => ({ ...state, isLoading: true }),
        [fetchContact.fulfilled]: (state, { payload }) => ({ ...state, items: payload, isLoading: false }),
        [fetchContact.rejected]: (state, { payload }) => ({ ...state, isLoading: false, error: payload }),
        // addContact
        [addContact.pending]: (state, _) => ({ ...state, isLoading: true }),
        [addContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected]: (state, { payload }) => ({ ...state, isLoading: false, error: payload }),
        // deleteContact
        [deleteContact.pending]: (state, _) => ({ ...state, isLoading: true }),
        [deleteContact.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(task => task.id === payload);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: (state, { payload }) => ({ ...state, isLoading: false, error: payload }),
    }
});



export const { filterContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

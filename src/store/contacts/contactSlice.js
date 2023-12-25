import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'service/api';



export const getContactAction = createAsyncThunk('contacts/fetchAll', async (_,{ rejectWithValue }) => {
	try {
    const data = await getContacts()
    return data	
  } catch (error) {
     			return rejectWithValue(error.message)
     		}
})

export const  addContactAction = createAsyncThunk('contacts/addContact', async (value,{ rejectWithValue }) => 
   {
   try {
    const data = await addContact(value)
    return data	
  } catch (error) {
     			return rejectWithValue(error.message)
     		}
      }
)

export const deleteContactAction = createAsyncThunk(
	'contacts/deleteContact',
	async (value,{ rejectWithValue }) => {
    try {
      const data = await deleteContact(value)
      return data	
    } catch (error) {
             return rejectWithValue(error.message)
           }

	}
)

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
}


const handlePending = (state) => {
  state.contacts.isLoading = true
  state.contacts.error = ''
}
const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = true
  state.contacts.error = payload
}
const handleFulfilledAdd = (state, { payload }) => {
  state.contacts.isLoading = false
  state.contacts.items.push(payload)
}
const handleFulfilledDel = (state, { payload }) => {
  state.contacts.isLoading = false
  state.contacts.items = state.contacts.items.filter(elem=>elem.id !== payload.id);
}
const handleFulfilledGet = (state, { payload }) => {
  state.contacts.isLoading = false
  state.contacts.items = payload;
}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  
  extraReducers: (builder) => {
    builder
    .addCase(addContactAction.pending, handlePending)
    .addCase(addContactAction.rejected, handleRejected)
    .addCase(addContactAction.fulfilled, handleFulfilledAdd)

    .addCase(getContactAction.pending, handlePending)
    .addCase(getContactAction.rejected, handleRejected)
    .addCase(getContactAction.fulfilled, handleFulfilledGet)

    .addCase(deleteContactAction.pending, handlePending)
    .addCase(deleteContactAction.rejected, handleRejected)
    .addCase(deleteContactAction.fulfilled, handleFulfilledDel)
  },
});


export const contactsReducer = contactsSlice.reducer;

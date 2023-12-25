
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

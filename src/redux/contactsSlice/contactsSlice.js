import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 1, name: 'petre', number: 3874626426 },
    { id: 2, name: 'john', number: 75623543542 },
  ],
};

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

// Генераторы экшенов
export const { deleteContact, addContact } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';

const persistConfig = {
  key: 'contacts',
  storage: storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);

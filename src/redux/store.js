import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { pokemonApi } from './pokemon';
import { contactApi } from './contacts/contactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactApi.middleware,
  ],
  devtools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;

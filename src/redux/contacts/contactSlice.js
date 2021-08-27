import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://612639f83ab4100017a68e1f.mockapi.io/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

export const { useFetchContacts } = contactApi;

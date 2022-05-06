// Need to use the React-specific entry point to import createApi
import { User } from '@/interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: builder => ({
    getUser: builder.query<User, string>({
      query: () => '/user',
    }),
  }),
})

export const { useLazyGetUserQuery } = userApi

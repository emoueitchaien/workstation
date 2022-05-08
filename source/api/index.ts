// Need to use the React-specific entry point to import createApi
import { User } from '@/interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tempapi.proj.me/api/',
  }),
  endpoints: builder => ({
    getUser: builder.query<User, void>({
      query: () => ({ url: '2kvA6zIlI' }),
    }),
  }),
})

export const { useGetUserQuery } = userApi

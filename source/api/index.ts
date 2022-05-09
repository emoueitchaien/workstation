// Need to use the React-specific entry point to import createApi
import { ImageRoot, User } from '@/interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://api.unsplash.com/search/photos?client_id=jELu5VV8jSA6uHXZFFuBYY-vA8Db-I_c-gduSeXSrBg&per_page=100',
  }),
  endpoints: builder => ({
    getImages: builder.query<ImageRoot, string>({
      query: key => `&query=${key}`,
    }),
  }),
})

export const { useGetImagesQuery } = userApi

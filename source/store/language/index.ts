import { createSlice } from '@reduxjs/toolkit'

const colorSlice = createSlice({
  name: 'color',
  initialState: { color: 'en' },
  reducers: {
    changeLanguage: (state, payload: any) => {
      state.color = payload.color
    },
  },
})

export const { changeLanguage } = colorSlice.actions

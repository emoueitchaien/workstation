import i18n from '@/i18n/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import i18next from 'i18next'

export type LanguageProps = {
  language: 'en' | 'np'
}

const languageSlice = createSlice({
  name: 'language',
  initialState: { language: 'en' },
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguageProps>) => {
      if (typeof state.language !== 'undefined') {
        i18n.changeLanguage(action.payload.language === 'en' ? 'en' : 'np')
        const newLanguage = i18next.language
        state.language = newLanguage
        // state.loading = true;
      }
    },
  },
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer

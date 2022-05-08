import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import theme from '@/store/theme'
import { reduxStorage } from '@/store/storage'
import { userApi } from '@/api'
import counter from '@/store/counter'
import language from '@/store/language'

const reducers = combineReducers({
  counter,
  theme,
  language,
  [userApi.reducerPath]: userApi.reducer,
})

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme', userApi.reducerPath, 'language'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware)

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default
    //   middlewares.push(createDebugger())
    // }

    return middlewares
  },
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }

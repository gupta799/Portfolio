import { configureStore } from '@reduxjs/toolkit'
import{ThunkAction} from 'redux-thunk'
const store = configureStore({
  reducer: {
  },
  middleware:(getDefaultMiddleware: () => any)=>getDefaultMiddleware()
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  any
>
export default store
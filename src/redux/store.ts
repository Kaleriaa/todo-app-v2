import userSlice from '@modules/user/slice'
import headerSlice from '@modules/header/slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        headerSlice,
        userSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

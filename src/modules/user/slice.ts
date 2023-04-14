import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@types'

const initialState: User = {
    uid: '',
    displayName: '',
    email: '',
    photoURL: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<User>) =>
            (state = { ...action.payload }),
    },
})

export const { loginUser } = userSlice.actions
export default userSlice.reducer

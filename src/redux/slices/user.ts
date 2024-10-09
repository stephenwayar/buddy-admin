import { UserState, User, Key } from '../types/user.types'
import { setCookieItem } from '@/helpers/functions/cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserState = { value: null };

export const userSlice = createSlice({
  name: 'userSlice',

  // Initial state for the slice
  initialState,

  reducers: {
    // Reducer to set the user state
    setUser: (state: UserState, action: PayloadAction<User | null>) => {
      // Update the state with the new user value
      state.value = action.payload;

      // If in a browser environment and a user is provided, set a cookie
      if (typeof document !== 'undefined' && action.payload) {
        setCookieItem(Key.BUDDY_USER, action.payload);
      }
    },
  },
});

export const { setUser } = userSlice.actions

export default userSlice.reducer
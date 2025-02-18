import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';

const initialState: User = {
  userId: null,
  email: null,
  userName: null,
  firstName: null,
  lastName: null,
  picture: 'https://avatars.githubusercontent.com/u/14308293',
  accessToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        // TODO: To set proper payload
        ...action.payload,
      };
    },
  },
});

export const { setUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;

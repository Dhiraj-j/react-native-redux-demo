import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../../type/User.types';
import {fetchRandomUsers} from '../../services/userApi';

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  resultsPerPage: number;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  currentPage: 1,
  resultsPerPage: 10,
};

// Thunk to fetch a random user
export const fetchUsers = createAsyncThunk<User[], void, {rejectValue: string}>(
  'user/fetchUsers',
  async (_, {getState, rejectWithValue}) => {
    const {currentPage, resultsPerPage} = (getState() as RootState).user;
    try {
      const users = await fetchRandomUsers(currentPage, resultsPerPage);
      return users;
    } catch (error) {
      return rejectWithValue('Failed to fetch users');
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetUsers: state => {
      state.users = [];
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...state.users, ...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {setPage} = userSlice.actions;

export default userSlice.reducer;

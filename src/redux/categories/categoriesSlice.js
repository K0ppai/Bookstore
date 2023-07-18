import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    displayStatus: (state) => {
      if (!state.status) {
        return 'Under construction';
      }
      return null;
    },
  },
});

export const { displayStatus } = categorySlice.actions;
export default categorySlice.reducer;


// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartVisible: false,
  },
  reducers: {
    toggleCartVisibility: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const { toggleCartVisibility } = cartSlice.actions;
export default cartSlice.reducer;

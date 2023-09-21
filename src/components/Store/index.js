
// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartVisible: false,
    notification:null,
  },
  reducers: {
    toggleCartVisibility(state)  {
      state.isCartVisible = !state.isCartVisible;
    },

    notification(state,action){
    state.notification={
      status:action.payload.status,
      title:action.payload.title,
      message:action.payload.message,
    }
  }
},

});

export const uiAction= uiSlice.actions;
export default uiSlice;

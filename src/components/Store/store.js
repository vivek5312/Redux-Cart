
import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './index';
import AddCartSlice from './cart-slice';
const store = configureStore({
  reducer: {
    cart: uiSlice.reducer,
    AddCart:AddCartSlice.reducer,
  },
 
});

export default store;


import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './index'
import AddCartSlice from './cart-slice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    AddCart:AddCartSlice.reducer,
  },
 
});

export default store;

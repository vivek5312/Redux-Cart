import { createSlice } from "@reduxjs/toolkit";
 const AddCartSlice=createSlice({
   name:'cart',
   initialState:{
    items:[],
    totalQuantity:0,
   }, 
   reducers:{
    addItemtoCart(state,action){
        const newItemId=action.payload;
        const existingItem=state.items.find(item=>item.id===newItemId.id);
        state.totalQuantity++;
        if(!existingItem){
            state.items.push({
                id:newItemId.id,
                price:newItemId.price,
                quantity:1,
                name:newItemId.title,
                totalPrice:newItemId.price,
            })
            
        }
        else{
            existingItem.quantity++;
            existingItem.totalPrice += newItemId.price;
        }
    },
    removeItemtoCart(state,action){
        const id=action.payload;
        const existingItem=state.items.find(item=>item.id===id)
        state.totalQuantity--;
        state.changed=true;
        if(existingItem===1){
            state.items=state.items.filter((item)=>item.id !==id)
        }
        else{
            existingItem.quantity--;
        }


    }
   }
})
export const cartAction=AddCartSlice.actions;
export default AddCartSlice;
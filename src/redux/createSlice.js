import {createSlice} from '@reduxjs/toolkit'
const cartSlice=createSlice ({
    name:"cart",
    initialState:{
        cartitems:[]
    },
    reducers:{
        increment:(state,action)=>{
                state.cartitems.push({...action.payload,quantity:1})
        },
    
    add:(state,action)=>{
       state.cartitems= state.cartitems.map((furniture)=>{
            if(furniture.id===action.payload.id){
                return {...furniture,quantity:furniture.quantity+1,
                };
                };
                return furniture;
        })
        
    },
    minus:(state,action)=>{
        state.cartitems= state.cartitems.map((furniture)=>{
             if(furniture.id===action.payload.id){
                 return {...furniture,quantity:furniture.quantity-1, 
            };
                 };
                 return furniture;
         }).filter(furniture => furniture.quantity > 0);

         
     },

     remove:(state,action)=>{
        state.cartitems=state.cartitems.filter(furniture=>furniture.id!==action.payload.id);
     },
     clearCart: (state) => {
        state.cartitems = [];
      }
    
    
}
});
export const {increment,add,minus,remove,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
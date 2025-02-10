import { createSlice } from "@reduxjs/toolkit";
const productSlice=createSlice({
    name:"search",
    initialState:{
        originalFurniture: [], 
        furniture:[],
    },
    reducers:{
        setproducts:(state,action)=>{
            state.originalFurniture = action.payload;
            state.furniture=action.payload;
          },

        searchProduct: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            if (searchTerm === "") {
                state.furniture = state.originalFurniture; 
            } else {
                state.furniture = state.originalFurniture.filter((furniture) =>
                    furniture.title.toLowerCase().includes(searchTerm)
              );
            }
          },

            searchcategory:(state,action)=>{
                const searchTerm = action.payload.toLowerCase();
                if(action.payload==="All")
                {
                  state.furniture=state.originalFurniture;
                }
                else{
                    state.furniture = state.originalFurniture.filter((furniture) =>
                        furniture.title.toLowerCase().includes(searchTerm)
                  );
                }},
        
        }
    
})

export const{searchProduct,searchcategory,setproducts}=productSlice.actions;
export default productSlice.reducer
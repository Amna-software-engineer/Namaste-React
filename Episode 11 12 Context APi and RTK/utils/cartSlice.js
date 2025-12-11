import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["amna"]
    },
    reducers: {
        addItems: (state,action) => {
            state.items.push(action.payload) ;
        }
    }
})

/*
it will retunr something like this
{
actions,
reducers,//slice
}
*/ 

export const {addItems}=cartSlice.actions;
export default cartSlice.reducer;//exporting the slice
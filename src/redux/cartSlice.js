import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{           // state will take the value from the array
            state.push(action.payload)      // action.payload will store a id that will be pushed to te state
        }  ,
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        }    
    }
})


export const {AddItem,RemoveItem} = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{           // state will take the value from the array
         let existItem = state.find((item)=>item.id===action.payload.id) // find will find that whether the element is already existing with the help of the id .
         if(existItem){
           return state.map((item)=>(item.id===action.payload.id? {...item,qty:item.qty+1}:item))
         }
         else{
            state.push(action.payload)}      // action.payload will store a id that will be pushed to te state
        }  ,
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        } ,
        IncreaseQty:(state,action)=>{
           return state.map((item)=>(item.id===action.payload.id? {...item,qty:item.qty+1}:item))  // Card2 mee id ko as a object pass karenge dispatch ke ander..

        }  ,

         DecreaseQty:(state,action)=>{
           return state.map((item)=>(item.id===action.payload.id? {...item,qty:item.qty-1}:item))  // Card2 mee id ko as a object pass karenge dispatch ke ander..

        }  

    }
})


export const {AddItem,RemoveItem , IncreaseQty , DecreaseQty} = cartSlice.actions
export default cartSlice.reducer
import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";



const Home = () => {

  let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)

  function filter(category){
    if(category==="All"){
      setCate(food_items)
    }
    else{
     let newList= food_items.filter((item)=>(item.food_category===category))
     setCate(newList)
    }
  }


   // Calculating total Bill .......

  let items = useSelector(state=>state.cart)

  let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
  console.log(subtotal);

 
  let deliveryFees = 20;
  let taxes=subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryFees+taxes)
  
//.........

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav /> 
   {!input ?    <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item)=>{
            return<div className='w-[140px] h-[150px] bg-white flex flex-col gap-5 p-5 justify-center text-[18px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
            {item.icon}
            {item.name}
           </div>
})}
      </div>: null}

      <div className='w-full flex flex-wrap px-5 pt-8 pb-8 items-center justify-center gap-5'>
         
         {cate.length>1?cate.map((item)=>(
        <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
       )):<div className='text-center text-2xl text-green-500 font-semibold pt-5'>no dish found</div>}

       
      </div>

      

       {/* .......Cart........   */}
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-400 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center '>
          <span className='text-green-500 text-[18px] font-semibold'>Order Items</span>
          <RxCross2 className='text-green-500 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-gray-400' onClick={()=>{setShowCart(false)}}/>
        </header>
        

        {items.length>0?<>
        <div className='w-full mt-9 flex flex-col gap-8'>
          {items.map((item=>(
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
          )))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7  p-8 flex flex-col gap-2 pb-4 items'>
        <div className='w-full flex justify-between items-center'>
          <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
          <span className='text-green-500 font-semibold text-lg'>Rs {subtotal}/-</span>
        </div>
        <div className='w-full flex justify-between items-center'>
          <span className='text-lg text-gray-600 font-semibold'>Delivery Fees</span>
          <span className='text-green-500 font-semibold text-lg'>Rs {deliveryFees}/-</span>
        </div>
         <div className='w-full flex justify-between items-center'>
          <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
          <span className='text-green-500 font-semibold text-lg'>Rs {taxes}/-</span>
        </div>
        </div>
        <div className='w-full flex justify-between items-center pl-9 pr-9 pt-2 pb-3'>
          <span className='text-xl text-gray-800 font-semibold'>Total</span>
          <span className='text-green-500 font-semibold text-xl'>Rs {total}/-</span>
        </div>
        <button className='w-[90%] bg-green-500 p-3 rounded-lg text-white hover:bg-green-300 transition-all duration-200 cursor-pointer' onClick={()=>toast.success("Order Placed")}>Place Order</button>
      </>
      :
      <div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Cart</div>
      }
        
      </div>

    </div>
    
  )
}

export default Home

import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';
import { IncreaseQty } from '../redux/cartSlice';
import { DecreaseQty } from '../redux/cartSlice';


const Card2 = ({id,name,image,price,qty}) => {


let dispatch=useDispatch()

  return (
    <div className='w-full h-[150px] shadow-xl p-2 flex justify-between '>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover '/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'>
            <div className='text-lg font-semibold text-gray-500'>{name}</div>
            <div className='w-[110px] h-[45px] bg-slate-200 text-xl flex overflow-hidden rounded-lg shadow-lg border-2 border-green-400'>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 font-semibold hover:bg-gray-200' onClick={()=>{qty>1?dispatch(DecreaseQty({id:id})):qty=1}}>-</button>
              <span className='w-[40%] h-full  flex justify-center items-center text-green-500 font-semibold '>{qty}</span>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 font-semibold hover:bg-gray-200' onClick={()=>{dispatch(IncreaseQty({id:id}))}}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl text-green-500'>Rs {price}/-</span>
        <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400' onClick={()=>dispatch(RemoveItem(id))}/>

      </div>
    </div>
  )
}

export default Card2

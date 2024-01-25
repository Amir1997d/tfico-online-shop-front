import React from 'react'
import OrderItem from './OrderItem';

const Oreders = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center'>
      <h1 className='font-bold text-xl mt-4'>Oreders</h1>
      <OrderItem />
    </div>
  )
}

export default Oreders;
import React from 'react';
import DrawingInput from '@components/DrawingInput';
import SelectMaterial from '@components/SelectMaterial';

const CostumBladePage = () => {
  return (
    <div className='w-full min-h-screen mt-14 p-1 flex flex-col justify-start items-center'>
      <div className='w-3/4 md:w-1/2 mt-10 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-xl mb-4'>Costum Blade</h1>
        <h2 className='text-orange-400'>Did you not find the blade you seek among our selection?!</h2>
        <p className='text-justify mt-4'>We possess the capability to craft a custom blade just for you. Simply fill out the form below, attach your drawings, and we will promptly provide you with a quote and answer regarding your bespoke blade.</p>
      </div>

      <form className='w-3/4 md:w-1/2 h-full my-10 border-orange-400 rounded-md border p-8 flex flex-col justify-center items-center gap-4 shadow-lg'>
        <div className='w-full flex flex-col justify-center items-start'>
          <label htmlFor="name">Your Name(Or Company Name):</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Your Name'
            required
            className='w-full border-orange-400 rounded-md border px-2 py-1 mt-1'
          />
        </div>

        <div className='w-full flex flex-col justify-center items-start'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com" 
            required
            className='w-full border-orange-400 rounded-md border px-2 py-1 mt-1'
          />
        </div>

        <div className='w-full flex flex-col justify-center items-start'>
          <label htmlFor="tel">Phone:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="e.g. +375123456789" 
            required
            className='w-full border-orange-400 rounded-md border px-2 py-1 mt-1'
          />        
        </div>

        <SelectMaterial />

        <div className='w-full flex flex-col justify-center items-start'>
          <label htmlFor="deliveryAddress">Comments(Optional):</label>
          <textarea name="deliveryAddress" id="deliveryAddress" rows={3} required className='w-full border-orange-400 rounded-md border px-2 py-1 mt-1' placeholder='Your Comment...'></textarea>
        </div>

        <DrawingInput />

        <button type="submit" className='w-1/2 md:w-1/3 xl:1/4 min-h-8 p-1 mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'>Send Request</button>
      </form>
   </div>
  )
}

export default CostumBladePage;
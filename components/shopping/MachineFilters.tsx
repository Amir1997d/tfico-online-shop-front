import React from 'react';

const MachineFilters = () => {
  return (
    <div className='lg:w-1/4 h-full border-orange-400 rounded-md my-4 mx-2 border p-4 bg-orange-100 lg:sticky lg:top-28'>
        <p className='text-orange-500 font-bold text-xl'>Filters</p>
        <hr className='border-orange-500 mb-4'/>
        <form className='w-full flex flex-col justify-start items-start'>
          <label>Price (USD $):</label>
          <div className='w-full flex justify-around items-center gap-2 mb-4 mt-1'>
            <input type="text" name="min-price" pattern="[0-9]" placeholder='from' className='w-1/2 border-orange-400 rounded-md border px-2 py-1'/>
            <input type="text" name="max-price" pattern="[0-9]" placeholder='to' className='w-1/2 border-orange-400 rounded-md border px-2 py-1'/>
          </div>
          <div className='w-full'>
            <label>Industry:</label>
            <select name="industrial" id="industrial" className='w-full border-orange-400 rounded-md border px-1 py-2 mt-1' defaultValue="Select an Industrial">
              <option value="Select an Industrial">Select an Industry</option>
              <option>Wood</option>
              <option>Paper</option>
              <option>Packing</option>
              <option>Cutting</option>
            </select>
          </div>
          <div className='w-full mt-4'>
            <label>Type:</label>
            <select name="industrial" id="industrial" className='w-full border-orange-400 rounded-md border px-1 py-2 mt-1' defaultValue="Select an Industrial">
              <option value="Select an Industrial">Select a Type</option>
              <option>Band Sawing Machine</option>
              <option>Band Sawing Machine</option>
            </select>
          </div>
          <div className='w-full mt-4'>
            <label>CNC:</label>
            <select name="industrial" id="industrial" className='w-full border-orange-400 rounded-md border px-1 py-2 mt-1' defaultValue="Select an Industrial">
              <option value="Select an Industrial">Select CNC</option>
              <option>No-CNC</option>
              <option>CNC</option>
            </select>
          </div>
          <button className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 w-full mt-8 mb-2 rounded-md hover:from-orange-500 hover:to-red-600'>Filter</button>
        </form>
    </div>
  )
}
export default MachineFilters;
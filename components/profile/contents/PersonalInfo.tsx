import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='font-bold text-xl my-8'>Personal Information</h1>
      <form className='w-3/4 h-full border-orange-400 rounded-md border p-8 flex flex-col justify-center items-center gap-4 shadow-lg'>
        <div className='w-full flex flex-col justify-center items-start'>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
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
                required
                className='w-full border-orange-400 rounded-md border px-2 py-1 mt-1'
            />
        </div>

        <div className='w-full flex flex-col'>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className='border-orange-400 rounded-md border p-1 mt-1'
            />
        </div>

        <div className='w-full flex flex-col justify-center items-start'>
            <label htmlFor="deliveryAddress">Delivery Address:</label>
            <textarea name="deliveryAddress" id="deliveryAddress" rows={3} required className='w-full border-orange-400 rounded-md border px-2 py-1 mt-1'></textarea>
        </div>

        <button type="submit" className='w-1/4 p-1 mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'>Save</button>
      </form>
    </div>
  )
}

export default PersonalInfo;
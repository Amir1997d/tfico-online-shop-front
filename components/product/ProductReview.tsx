import React from 'react'

const ProductReview = () => {
  return (
    <div className='w-full px-10 md:px-24 lg:px-12 mb-10'>
        <h3 className='font-bold text-lg mb-2'>Reviews:</h3>
        <hr className='border-1 border-orange-400 mb-8' />
        <form className='w-full my-4 flex justify-between items-center gap-2'>
            <input 
                type="text" 
                className='w-full pl-4 rounded-md h-10 border-solid border-2 border-slate-400 focus:outline-none focus:border-orange-400 focus:ring-orange-400 focus:ring-1'
            />
            <button 
                className='w-1/2 md:w-1/3 xl:1/4 min-h-8 p-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'
            >
                Add Review
            </button>
        </form> 
    </div>
  )
}

export default ProductReview
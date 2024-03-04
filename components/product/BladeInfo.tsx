import React from 'react'

const BladeInfo = () => {
  return (
    <div className='w-full px-10 md:px-24 lg:px-0 lg:w-2/3 min-h-32 mt-4 lg:mr-8'>
        <h1 className='text-2xl lg:text-3xl mb-2'>Bandsaw blade 12 mm x 98 mm x 1000 mm</h1>
        <hr className='border-1 border-orange-400 mb-8'/>
        <div className='w-full flex flex-col justify-around items-start gap-4'>
            <p><span className='font-bold mr-2'>Dementions:</span>100 mm x 50 mm x 1.5 mm</p>
            <p><span className='font-bold mr-2'>Material:</span>Tool Steel</p>
            <p><span className='font-bold mr-2'>Alloy Steel Code:</span>9CrSi</p>
            <p><span className='font-bold mr-2'>Ideal For:</span>Vertical packaging machines and equipment in the food industry</p>
            <p><span className='font-bold mr-2'>Hardness Ranges:</span>from 42 to 48 HRC Rockwell Scale</p>
            <p><span className='font-bold mr-2'>Price:</span>1290$</p>
            <div className='w-full md:w-2/3 flex justify-start items-center mt-4'>
                <input 
                type='number' 
                className='w-1/2 md:w-1/5 border-orange-400 rounded-md border px-3 py-3 mr-4' 
                min={1}
                max={10000}
                defaultValue={1}
                />
                <button className='w-1/2 md:w-1/3 xl:1/4 min-h-8 p-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default BladeInfo;
import React from 'react';
import Image from 'next/image';
import myImage from '@public/assets/images/machine-1.png';

type Params = {
  params: {
    machineId: string;
  }
}

const MachinePage = ({ params }: Params) => {
  return (
    <div className='w-full pt-16 min-h-screen flex flex-col justify-start items-center'>
      {/* page's head div  */}
      <div className='w-full m-8 flex flex-col lg:flex-row justify-around lg:justify-center lg:items-start items-center'>
        {/* images div */}
        <div className='w-96 h-96 m-4 lg:mx-10 flex flex-col justify-start items-center'>
          <div className='w-full h-2/3 shadow-md'>
            <Image src={myImage} alt="blade's photo" className='w-full h-full'/>
          </div>
          <div className='w-full h-1/3 mt-1 overflow-x-scroll flex justify-start items-center gap-1'>
            <div className='min-w-32 h-full bg-red-600'>
              <Image src={myImage} alt="blade's photo" className='w-full h-full'/>
            </div>
            <div className='min-w-32 h-full bg-red-600'><Image src={myImage} alt="blade's photo" className='w-full h-full'/></div>
            <div className='min-w-32 h-full bg-red-600'><Image src={myImage} alt="blade's photo" className='w-full h-full'/></div>
            <div className='min-w-32 h-full bg-red-600'><Image src={myImage} alt="blade's photo" className='w-full h-full'/></div>
            <div className='min-w-32 h-full bg-red-600'><Image src={myImage} alt="blade's photo" className='w-full h-full'/></div>
          </div>
        </div>
        {/* title div */}
        <div className='w-full px-10 md:px-24 lg:px-0 lg:w-2/3 min-h-32 mt-4 lg:mr-8'>
          <h1 className='text-2xl lg:text-3xl mb-2'>Metal Cutting Bandsaw BS-315gh Horizontal</h1>
          <hr className='border-1 border-orange-400 mb-8'/>
          <div className='w-full flex flex-col justify-around items-start gap-4'>
            <p><span className='font-bold mr-2'>Type:</span>Band Sawing Machine</p>
            <p><span className='font-bold mr-2'>Warranty:</span>1 year</p>
            <p><span className='font-bold mr-2'>CNC:</span>no-CNC</p>
            <p><span className='font-bold mr-2'>Industrial:</span>Metal Cutting</p>
            <p><span className='font-bold mr-2'>Machine Size:</span>163.00cm * 90.00cm * 155.00cm</p>
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
      </div>
      {/* description div  */}
      <div className='w-full px-10 md:px-24 lg:px-12 mb-10'>
        <h2 className='font-bold text-xl mb-2'>Description:</h2>
        <hr className='border-1 border-orange-400 mb-4' />
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil magni nam autem odio dignissimos! Beatae aspernatur sapiente sed vel eius quod corporis distinctio voluptas. Minus, dignissimos. Excepturi, officia unde!Loremlorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis modi dolorum reiciendis obcaecati! Alias, iste modi maiores inventore iusto delectus, eligendi doloribus rem consectetur repudiandae quae tenetur nam unde dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nihil ipsa corrupti, ad commodi facere sed maxime quos deserunt molestiae nam praesentium voluptatem aut incidunt aperiam quam repellat omnis quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio illum sunt aut nam ut libero natus accusamus nisi dolores explicabo harum, obcaecati eius ipsa sit aliquid quia porro fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat nesciunt optio doloribus quod repellendus magnam facilis saepe atque velit similique eveniet repellat quia, culpa illo tempora odit voluptates obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil magni nam autem odio dignissimos! Beatae aspernatur sapiente sed vel eius quod corporis distinctio voluptas. Minus, dignissimos. Excepturi, officia unde!Loremlorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis modi dolorum reiciendis obcaecati! Alias, iste modi maiores inventore iusto delectus, eligendi doloribus rem consectetur repudiandae quae tenetur nam unde dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nihil ipsa corrupti, ad commodi facere sed maxime quos deserunt molestiae nam praesentium voluptatem aut incidunt aperiam quam repellat omnis quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio illum sunt aut nam ut libero natus accusamus nisi dolores explicabo harum, obcaecati eius ipsa sit aliquid quia porro fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat nesciunt optio doloribus quod repellendus magnam facilis saepe atque velit similique eveniet repellat quia, culpa illo tempora odit voluptates obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil magni nam autem odio dignissimos! Beatae aspernatur sapiente sed vel eius quod corporis distinctio voluptas. Minus, dignissimos. Excepturi, officia unde!Loremlorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis modi dolorum reiciendis obcaecati! Alias, iste modi maiores inventore iusto delectus, eligendi doloribus rem consectetur repudiandae quae tenetur nam unde dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nihil ipsa corrupti, ad commodi facere sed maxime quos deserunt molestiae nam praesentium voluptatem aut incidunt aperiam quam repellat omnis quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio illum sunt aut nam ut libero natus accusamus nisi dolores explicabo harum, obcaecati eius ipsa sit aliquid quia porro fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat nesciunt optio doloribus quod repellendus magnam facilis saepe atque velit similique eveniet repellat quia, culpa illo tempora odit voluptates obcaecati.
        </p>
      </div>
      {/* reviews div  */}
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
      {/* <p>blade id Page: {params.machineId}</p> */}
    </div>
  )
}

export default MachinePage;
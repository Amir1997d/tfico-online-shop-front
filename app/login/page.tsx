"use client"
import React, { useState } from 'react';
import LoginForm from '@components/LoginForm';
import RegisterForm from '@components/RegisterForm';
import { FcGoogle } from "react-icons/fc";
import { FaYandex } from "react-icons/fa";

function Page() {
  const [register, setRegister] = useState<boolean>(false);
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-1/2 bg-slate-200 shadow-md rounded-lg flex flex-col justify-evenly items-center'>
        <h1 className='font-bold text-lg mt-4 mb-6'>Welcome to TFICo<span className='text-orange-400 text-3xl'>.</span></h1>
        {!register ? <LoginForm /> : <RegisterForm />}
        <hr className='w-3/4 border-1 border-orange-400 rounded-md'/>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-sm text-center m-2'>or sign in by:</p>
          <div className='flex items-center mb-6'>
            <button className='px-2 py-1 mx-1 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'>
              <FcGoogle/>
              <span className='text-sm'>Google</span>
            </button>
            <button className='px-2 py-1 mx-1 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'>
              <FaYandex className='text-black'/>
              <span className='text-sm'>Yandex</span>
            </button>
          </div>
        </div>
        {!register 
          ? <p className='text-sm mb-2 text-slate-400 text-center'>
              <span className='mt-4 mr-1'>You don't have an acoount?</span>
              <button className='text-blue-500' onClick={() => setRegister(true)}>create</button>
            </p> 
          : <p className='text-sm mb-2 text-slate-400 text-center'>
              <span className='mt-4 mr-1'>You already have an acoount?</span>
              <button className='text-blue-500' onClick={() => setRegister(false)}>sign in</button>
            </p> 
        }
      </div>
    </div>
  )
}

export default Page;
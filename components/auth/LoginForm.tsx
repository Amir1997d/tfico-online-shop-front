import Link from 'next/link';
import React from 'react'

const LoginForm = () => {
  return (
    <form className='w-full h-1/2 flex flex-col justify-center items-center'>
      <input 
        type="text" 
        placeholder='Enter Your Username' 
        className='w-3/4 h-8 rounded-md p-2 my-2'
      />
      <input 
        type="password" 
        placeholder='Enter Your Password'
        className='w-3/4 h-8 rounded-md p-2 mt-2 mb-6'
      />
      <p className='text-sm text-slate-600 mb-4'>
        <Link href="/forgot-pass">forget password?</Link>
      </p>
      <button className='w-3/4 py-1 mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600'>Login</button>
    </form>
  )
}

export default LoginForm;

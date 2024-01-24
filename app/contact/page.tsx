import ContactForm from '@components/contact/ContactForm';
import ContactInfo from '@components/contact/ContactInfo';
import SocialMedia from '@components/contact/SocialMedia';
import React from 'react';

const Page = () => {
  return (
    <div className='w-full min-h-screen mt-24 flex flex-col justify-start items-center'>
      <ContactForm />
      <hr className='w-5/6 border border-orange-400 rounded-md'/>
      <ContactInfo />
      <hr className='w-5/6 border mt-4 border-orange-400 rounded-md'/>
      <SocialMedia />
    </div>
  )
}

export default Page;
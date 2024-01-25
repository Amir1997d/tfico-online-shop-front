"use client";

import Content from '@components/profile/contents/Content';
import Sidebar from '@components/profile/Sidebar';
import { useState } from 'react';


const Page = () => {
  const titles = ['Personal Information', 'Orders', 'Log Out'];
  const [selectedTitle, setSelectedTitle] = useState<string>(titles[0]);

  const handleSelectTitle = (title: string) => {
    setSelectedTitle(title);
  };

  return (
    <div className='w-full min-h-screen mt-20 flex'>
      {/* <div>my (personal) information - address - phone number - ...</div>
      <div>my orders</div>
      <div>log out</div> */}
      <Sidebar titles={titles} onSelectTitle={handleSelectTitle}/>
      <Content selectedTitle={selectedTitle}/>
   </div>
  )
}

export default Page;
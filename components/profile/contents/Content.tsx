// components/Content.js
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import React from 'react';

type SelectedTitleType = {
    selectedTitle: string;
}
const Content = ({ selectedTitle }: SelectedTitleType) => {
  let content;

  if (selectedTitle === 'Personal Information') {
    content = <p>Personal Information</p>;
  } else if (selectedTitle === 'Orders') {
    content = <p>Orders</p>;
  } else if (selectedTitle === 'Log Out') {
    const router = useRouter();
    router.push("/");
  }
  return (
    <div className='w-full flex justify-center items-center'>
      {content}
    </div>
  );
};

export default Content;

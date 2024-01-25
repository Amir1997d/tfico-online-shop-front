// components/Content.js
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import Oreders from './orders/Oreders';
import PersonalInfo from './PersonalInfo';

type SelectedTitleType = {
    selectedTitle: string;
}
const Content = ({ selectedTitle }: SelectedTitleType) => {
  let content;

  if (selectedTitle === 'Personal Information') {
    content = <PersonalInfo />;
  } else if (selectedTitle === 'Orders') {
    content = <Oreders />;
  } else if (selectedTitle === 'Log Out') {
    const router = useRouter();
    router.push("/");
  }
  return (
    <div className='w-full mb-24'>
      {content}
    </div>
  );
};

export default Content;

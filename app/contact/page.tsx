import ContactForm from '@components/contact/ContactForm';
import ContactInfo from '@components/contact/ContactInfo';
import SocialMedia from '@components/contact/SocialMedia';
import contact from '@public/assets/images/contact.jpg';
import Image from 'next/image';

const ContactUsPage = () => {
  return (
    <div className='w-full mt-24 flex flex-col justify-start items-center'>
      <Image src={contact} width={500} alt="contact image"/>
      <ContactForm />
      <hr className='w-5/6 border border-orange-400 rounded-md'/>
      <ContactInfo />
      <hr className='w-5/6 border mt-4 border-orange-400 rounded-md'/>
      <SocialMedia />
    </div>
  )
}

export default ContactUsPage;
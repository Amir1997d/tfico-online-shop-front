import React from 'react'
import Link from 'next/link'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { FaMapLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='w-full min-h-40'>
      <div className='w-full min-h-40 px-12 py-4 flex flex-col justify-between bg-black text-white md:flex-row'>
        <div className='min-w-1/4 m-4'>
          <ul className='flex flex-col gap-2'>
            <li className='mb-4 flex items-center font-bold text-orange-400'><AiOutlineExclamationCircle className='mr-1 text-2xl'/>Quick Links</li>
            <li><Link href='/about'>About us</Link></li>
            <li><Link href='/contact'>Contact us</Link></li>
            <li>Sitemap</li>
            <li>Track Order</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        <div className='min-w-1/4 m-4'>
          <ul className='flex flex-col gap-2'>
            <li className='mb-4 text-orange-400 font-bold'>TFICo.</li>
            <li><Link href='/'>Cutomer Reviews</Link></li>
            <li><Link href='/'>Privecy Policy</Link></li>
            <li><Link href='/contact'>Return Policy</Link></li>
            <li><Link href='/contact'>FAQ</Link></li>
          </ul>
        </div>

        <div className='min-w-1/4 m-4'>
          <ul className='flex flex-col gap-2'>
            <li className='mb-4 flex items-center font-bold text-orange-400'><MdPayments className='mr-1 text-2xl'/>Payment</li>
            <li className='flex items-center'><FaPaypal className='mr-2 text-xl'/>Paypal</li>
            <li className='flex items-center'><FaCcVisa className='mr-2 text-xl'/>Visa</li>
            <li className='flex items-center'><FaCcMastercard className='mr-2 text-xl'/>Master</li>
          </ul>
        </div>

        <div className='min-w-1/4 m-4'>
          <ul className='flex flex-col justify-center items-start gap-2'>
            <li className='mb-4 flex items-center font-bold text-orange-400'><FaMapLocationDot className='mr-1 text-2xl' />Cites Covered</li>
            <li>Minsk</li>
            <li>Brest</li>
            <li>Hrodna</li>
            <li>Babruysk</li>
            <li>Homel</li>
            <li>Vitebsk</li>
          </ul>
        </div>
      </div>

      <div className='w-full min-h-12 px-4 md:px-10 py-4 md:py-0 flex justify-between items-center bg-slate-300'>
        <span className='font-bold text-sm md:text-md'>Copyright © 2023 TFICo. All right reserved.</span>
        <div className='flex justify-center items-center gap-2'>
          <span className='hidden font-bold md:flex text-sm md-text-md'>Follow Us:</span>
          <span title='Our FaceBook'><Link href="/facebook"><FaFacebook className='text-blue-500 text-2xl'/></Link></span>
          <span title='Our Instagram'><Link href="/instagram"><FaInstagram className='text-purple-500 text-2xl'/></Link></span>
          <span title='Our YouTube'><Link href="/youtube"><FaYoutube className='text-red-500 text-2xl'/></Link></span>
          <span title='Our Twitter'><Link href="/twitter"><FaXTwitter className='text-black text-2xl'/></Link></span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
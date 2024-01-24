"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import tfiLogo from '@public/assets/images/tfi-logo-2.png'
import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";


const Header = () => {
  const userIsLogged = false;
  const isAdmin = false;
  const [sideMenuStyle, setSideMenuStyle] = useState<string>('hidden');

  return (
    <div>
      <nav className='w-full h-20 bg-slate-100 fixed top-0 shadow flex justify-between items-center'>
        <div className='w-1/4 ml-4 lg:ml-10' onClick={()=>setSideMenuStyle('hidden')}> 
          <Link href="/" className='flex justify-start items-end'>
            <Image
              src={tfiLogo}
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <span className='font-bold ml-2 text-xl'>TFICo<span className='text-orange-500 text-4xl'>.</span></span>
          </Link>
        </div>
        <ul className='hidden lg:flex w-2/4 justify-center items-center gap-8'>
            <li className='hover:text-orange-400'><Link href="/blades">Blades</Link></li>
            <li className='hover:text-orange-400'><Link href="/machines">Machines</Link></li>
            <li className='hover:text-orange-400'><Link href="/customized-order">Custom Order</Link></li>
            <li className='hover:text-orange-400'><Link href="/contact">Contact</Link></li>
            <li className='hover:text-orange-400'><Link href="/about">About</Link></li>
        </ul>
        <ul className='hidden lg:flex w-1/4 mr-10 justify-end items-center'>
          <li>
            <select className='mr-4 p-1 text-md bg-black text-white rounded-md hover:text-orange-400'>
              <option>En</option>
              <option>Ru</option>
            </select>
          </li>
          <li className='mx-2 hover:text-orange-400'><Link href="/serach" title="Search"><FaMagnifyingGlass /></Link></li>
          <li className='mx-2 hover:text-orange-400'><Link href={userIsLogged ? "/profile" : "/login"} title={userIsLogged ? "Profile" : "Login"}><FaUser /></Link></li>
          <li className='mx-2 hover:text-orange-400'><Link href="/cart" title="Cart"><FaCartShopping /></Link></li>
          {isAdmin ? <li className='hover:text-orange-400 text-xl mx-2'><Link href="/admin" title="Admin Page"><MdAdminPanelSettings /></Link></li> : <></>}
        </ul>
        <div className='mr-4 lg:hidden'>
          <button onClick={()=>setSideMenuStyle('w-1/2 min-h-screen fixed top-0 right-0 p-4 shadow-2xl bg-slate-100')}><GiHamburgerMenu className='text-2xl text-black'/></button>
        </div>
      </nav>

      {/* Mobile Veiw Navbar Menu*/}
      <div className={sideMenuStyle}>
        <div>
          <div className='w-full flex justify-between items-center'>
            <button className='p-2 flex items-center hover:text-orange-400' onClick={()=>setSideMenuStyle('hidden')}><ImCross className='text-black mr-2'/>Close</button>
            <select className='p-1 text-sm bg-black text-white rounded-md hover:text-orange-400'>
              <option>En</option>
              <option>Ru</option>
            </select>
          </div>
          <hr className='mb-4 md:mb-8'/>
        </div>
        <ul className='flex flex-col justify-start items-start gap-4 md:gap-8' onClick={()=>setSideMenuStyle('hidden')}>
          {isAdmin 
            ? <li className='hover:text-orange-400'>
                <Link href="/admin" className='flex items-center'>
                  <MdAdminPanelSettings className='text-xl mr-2'/>
                  <span>Admin</span>
                </Link>
              </li> 
            : <></>}
          <li className='flex items-center hover:text-orange-400 '>
            <Link href="/serach" title="Search" className='flex items-center gap-2'>
              <FaMagnifyingGlass />
              <span>Search</span>
            </Link>
          </li>
          <li className='hover:text-orange-400'>
            <Link className='flex items-center gap-2' href={userIsLogged ? "/profile" : "/login"} title={userIsLogged ? "Profile" : "Login"}>
              <FaUser />{userIsLogged ? <span>Profile</span> : <span>Login</span>}
            </Link>
          </li>
          <li className='hover:text-orange-400'>
            <Link href="/cart" title="Cart" className='flex items-center gap-2'>
              <FaCartShopping />
              <span>Cart</span>
            </Link>
          </li>
          <li className='hover:text-orange-400'><Link href="/blades">Blades</Link></li>
          <li className='hover:text-orange-400'><Link href="/machines">Machines</Link></li>
          <li className='hover:text-orange-400'><Link href="/customized-order">Custom Order</Link></li>
          <li className='hover:text-orange-400'><Link href="/contact">Contact Us</Link></li>
          <li className='hover:text-orange-400'><Link href="/about">About Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
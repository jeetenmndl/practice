import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.png'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { CircleUser } from 'lucide-react'
// import SideBar from './Sidebar'
import { Button } from '../ui/button'
  

const Navbar = () => {
  return (
    <>
    {/* <!-- Top nav bar for secondary links --> */}
    <nav
      className="w-full px-2 md:px-6 lg:px-12 xl:px-28 text-xs text-333 hidden md:flex border-b border-gray-light justify-end"
    >
      <div className="tier1 flex leading-10">
        <Link href="/about" className="mx-8 text-center tracking-widest cursor-pointer hover:underline">ABOUT</Link>
        <Link href="/faq" className="mx-8 tracking-widest cursor-pointer hover:underline">FAQ&apos;S</Link>
        <Link href="/contact" className="mx-8 tracking-widest cursor-pointer hover:underline">CONTACT</Link>
      </div>
      <div className="tier2 leading-10">
        <div className="ml-8 tracking-widest">
          {/* <LoginLogout /> */}
          LOG IN
        </div>
      </div>
    </nav>


    {/* <!-- Second Nav bar for logo and primary Links --> */}
    <header className=" px-2 md:px-6 lg:px-12 xl:px-28 w-full py-2 md:py-0.5 text-sm text-333 font-semibold shadow-sm flex items-center justify-between border-b border-gray-light">
      <div className="flex">
      {/* <!-- logo --> */}
        <div className="logo flex items-center gap-2 md:gap-4 mr-9 cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="Hamrodera" className=' w-7 h-7 md:w-12 md:h-12'/>
          </Link>
          <Link href="/" className=' text-xl tracking-wide md:text-3xl font-semibold text-gray-800'>Pariwar</Link>
        </div>

        {/* <!-- links primary  --> */}
        <div className="tier1 hidden lg:flex leading-[80px] [&>a]:uppercase">
          <Link href="/my-issues" className="mx-8 tracking-widest cursor-pointer hover:underline">My Issues</Link>
          <Link href="/replies" className="mx-8 tracking-widest cursor-pointer hover:underline">Suggestions</Link>
          <Link href="/relation" className="mx-8 tracking-widest cursor-pointer hover:underline">Relation</Link>
          <Link href="/guide" className="mx-8 tracking-widest cursor-pointer hover:underline">Guide</Link>
        </div>
      </div>

      <div className='flex gap-4 items-center'>
        <Link href="/profile">
          <CircleUser strokeWidth={1.75}  />
        </Link>
        {/* <SideBar /> */}
      </div>

    </header>


    </>
  )
}

export default Navbar
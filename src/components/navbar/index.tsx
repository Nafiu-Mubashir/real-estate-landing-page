import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../button/button'

const Navbar = () => {
  return (
    <>

    <nav className="bg-white sticky w-full z-20 top-0 start-0 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src={'/logo.png'} alt='Logo' width={100} height={40} />
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden md:block">
          <div className="flex gap-3 items-center">
                <Button type='button' text='Login'  />
                <Button type='button' text='Sign Up' fill />
            </div>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
          <Link href={"/"}>Rent</Link>
          </li>
          <li>
          <Link href={"/"}>Buy</Link>
          </li>
          <li>
          <Link href={"/"}>Sell</Link>
          </li>
          <li>
          <Link href={"/"}>Manage Property</Link>
          </li>
          <li>
          <Link href={"/"}>Resources</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    
    
    {/* <div className='p-3 bg-white shadow py-4'>
        <nav className='flex justify-between w-[80%] mx-auto'>
            <Image src={'/logo.png'} alt='Logo' width={100} height={40} />

            <div className="flex items-center gap-5 text-black text-sm">
                <Link href={"/"}>Rent</Link>
                <Link href={"/"}>Buy</Link>
                <Link href={"/"}>Sell</Link>
                <Link href={"/"}>Manage Property</Link>
                <Link href={"/"}>Resources</Link>
            </div>

            <div className="flex gap-3 items-center">
                <Button text='Login'  />
                <Button text='Sign Up' fill />
            </div>
        </nav>
    </div> */}
    </>
  )
}

export default Navbar
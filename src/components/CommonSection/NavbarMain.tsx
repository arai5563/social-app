"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from './Navbar'
import UserData from '@/context/UserDataContext'

const NavbarMain = () => {
    const pathname = usePathname()
    
  return (
     <>
       {
        pathname === "/login" || pathname === "/signup" ? "" : 
        <UserData>

          <Navbar/>
        </UserData>
       }
    
    </>
  )
}

export default NavbarMain

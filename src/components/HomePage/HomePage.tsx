"use client"
import { UserDataContext } from '@/context/UserDataContext'
import React, { useContext, useEffect } from 'react'

const HomePage = (user:any) => {

  const {userState,setUserState} = useContext(UserDataContext)
    
   useEffect(()=> {
    setUserState(user)
   },[user])

  return (
    <div>HomePage</div>
  )
}

export default HomePage
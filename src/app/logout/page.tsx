"use client"

import supabaseClient from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"
import React from "react"

const page = () => {
  const router = useRouter()
  const logoutHandler = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut()
      router.push("/login")

    } catch (error) {
      console.log("error: ", error)
    }
  }
  return (
    <div>
      <div>Logout</div>
      <button
        className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        onClick={logoutHandler}
      >
        Sign In
      </button>
    </div>
  )
}

export default page

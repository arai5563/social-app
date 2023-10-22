"use client"
import supabaseClient from "@/lib/supabaseClient"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const signup = () => {

  const router = useRouter()

  const signUpHandler = async () => {
    try {
      const {
        data: {},
        error,
      } = await supabaseClient.auth.signUp({
        email: "payamit.ar@gmail.com",
        password: "123456",
      })
          console.log("link sended");
          
    } catch (error) {
      console.log("error: ", error)
    }
  }

  const signInHandler = async () => {
    try {
      const {
        data: {},
        error,
      } = await supabaseClient.auth.signInWithPassword({
        email: "payamit.ar@gmail.com",
        password: "123456",
      })
      console.log('error: ', error);
    } catch (error) {
      console.log("error: ", error)
    }
  }

  return (
    <div>
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md  mt-[90px]">
        <div className="flex justify-center mx-auto">
          <Image
            height={50}
            width={50}
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <form className="mt-6">

        <div>
            <label className="block text-sm text-gray-800 ">Username</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-800 ">Email</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-800 ">Password</label>
              <a href="#" className="text-xs text-gray-600  hover:underline">
                Forget Password?
              </a>
            </div>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              onClick={signInHandler}
            >
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500  hover:underline"
          >
           Already have a account ?
          </a>

          <span className="w-1/5 border-b  lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={()=> router.push("/login")}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
           
            <span className="hidden mx-2 sm:inline">Jump to Login</span>
          </button>

        </div>

      
      </div>
    </div>
  )
}

export default signup

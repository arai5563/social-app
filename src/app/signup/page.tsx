"use client"
import supabaseClient from "@/lib/supabaseClient"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Hide from "../../../assets/password.svg";
import Show from "../../../assets/text.svg";
import AppLogo from "../../../assets/Social_media.gif"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { signupSchema } from "../../../schema/loginSchema"
import { useFormik } from "formik"

const signup = () => {

  const router = useRouter()
  const [passswordShow, setPasswordShow] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, handleSubmit, errors, touched, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (value:any) => {
      signUpHandler(value)
    },
  });

  const signUpHandler = async (value:any) => {
    try {
      const {
        data,
        error,
      } = await supabaseClient.auth.signUp({
        email: value.email,
        password: value.password,
      })
          
    } catch (error) {
      console.log("error: ", error)
    }
  }

  

  return (
    <div>
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md  mt-[90px]">
        <div className="flex justify-center mx-auto">
        <Image
            height={150}
            width={150}
            src={AppLogo}
            alt=""
          />
        </div>

        <form className="mt-6 flex flex-col gap-y-3" onSubmit={handleSubmit} >

          


          <div>
            <div className="flex flex-col ">
              <TextField
                id="email"
                label="Email"
                variant="standard"
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
                error={touched.email && (errors.email as undefined)}
              />
            </div>
            {errors.email && (
              <div>
                <p className="flex flex-col mt-2 text-sm text-red-400">
                  {touched.email && errors.email}
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-col">
              <TextField
                id="newpassword"
                label="New Password"
                autoComplete="off"
                variant="standard"
                value={values.password}
                onChange={handleChange}
                type={`${passswordShow ? "text" : "password"}`}
                error={touched.password && (errors.password as undefined)}
                name="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() => setPasswordShow(!passswordShow)}
                      >
                        {passswordShow ? (
                          <Image src={Show} alt="show" width={24} height={24} />
                        ) : (
                          <Image src={Hide} alt="show" width={24} height={24} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {errors.password && (
                <div>
                  <p className="flex flex-col mt-2 text-sm text-red-400">
                    {touched.password && errors.password}
                  </p>
                </div>
              )}
            </div>
          </div>


          <div className="mt-6">
            <button
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              type="submit"
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

"use client"
import React, { Dispatch, SetStateAction, useState } from "react"

export const UserDataContext = React.createContext<{
  userState: any
  setUserState: Dispatch<SetStateAction<any>>
}>({
  userState: {},
  setUserState: () => null,
})

interface Props {
  children: React.ReactNode
}

const UserData: React.FC<Props> = (props) => {
  const [userState, setUserState] = useState<any>({})
  return (
    <UserDataContext.Provider
      value={{ userState, setUserState  }}
    >
      {props.children}
    </UserDataContext.Provider>
  )
}

export default UserData
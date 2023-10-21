"use client"

import { useRouter } from "next/navigation"
import supabaseClient from "@/lib/supabaseClient"
import { useEffect } from "react"

const SupabaseListener = ({ accessToken }: { accessToken: string }) => {
  const router = useRouter()

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken])
  return null
}

export default SupabaseListener

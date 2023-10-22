import HomePage from "@/components/HomePage/HomePage"
import UserData from "@/context/UserDataContext"
import createServerClient from "@/lib/supabaseServer"


export default async function Home() {
 

  const supabaseClient = createServerClient()

  const fetchUserData = async () => {
    const {
      data: { user },
      error,
    } = await supabaseClient.auth.getUser()

    return { user }
  }

  const { user } = await fetchUserData()
 

  return (
    <UserData>
    <HomePage user={user}/>
    </UserData>
  )
}

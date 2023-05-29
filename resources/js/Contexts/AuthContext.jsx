import { useUserQuery } from '@Hooks/Queries/User'
import { usePage } from '@inertiajs/react'
import { createContext } from 'react'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const {
    auth: { user: initialUser },
  } = usePage().props

  const user = useUserQuery({
    initialData: initialUser,
  })

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

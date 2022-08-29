import React, { createContext, useState } from "react"

interface AuthContextProps {
  logged?: boolean
  handleLogin: () => void
  handleLogout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  handleLogin: () => {},
  handleLogout: () => {},
})

export const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false)
  const handleLogin = () => {
    setLogged(true)
  }
  const handleLogout = () => {
    setLogged(false)
  }
  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, logged }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

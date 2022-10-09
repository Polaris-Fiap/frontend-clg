/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from 'react'
import { ReactFCProps } from '../@types/geral'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Login } from '../screens'
import { api } from '../api'
import { PacienteApi } from '../@types/typesApi'

interface AuthContextProps {
  logged?: boolean
  user?: PacienteApi
  handleLogin: (dados: Login) => void
  handleLogout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleLogin: (dados: Login) => {},
  handleLogout: () => {}
})

export const AuthProvider: React.FC<ReactFCProps> = ({ children }: ReactFCProps) => {
  const [logged, setLogged] = useState<boolean>(false)
  const [user, setUser] = useState<PacienteApi>()

  const getUserApi = async () => {
    try {
      const response = await api.get<PacienteApi[]>('/api/paciente')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogin = async (dados: Login) => {
    const users = await getUserApi()
    const user = users?.filter(info => info.email === dados.email && info.senha === dados.senha)
    await AsyncStorage.removeItem('@UserId')
    if (user) {
      try {
        await AsyncStorage.setItem('@UserId', JSON.stringify(user[0]))
        setUser(user[0])
        setLogged(true)
      } catch (e) {
        console.log(e)
      }
    }
  }
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@UserId')
    setUser(undefined)
    verifyUser()
  }

  const verifyUser = async () => {
    const infoUser = await AsyncStorage.getItem('@UserId')
    const info = infoUser && JSON.parse(infoUser)
    if (info) {
      const dados = await api.get<PacienteApi>(`/api/paciente/${info.id}`)
      if (dados.data) {
        setLogged(true)
        setUser(info)
      }
    } else {
      setLogged(false)
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, logged, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

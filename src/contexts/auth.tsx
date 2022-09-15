/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from 'react'
import { ReactFCProps } from '../@types/geral'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Login, Paciente } from '../screens'
import Toast from 'react-native-toast-message'

interface AuthContextProps {
  logged?: boolean
  user?: Paciente
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
  const [user, setUser] = useState<Paciente>()

  const handleLogin = async (dados: Login) => {
    const json = await AsyncStorage.getItem('@user')
    const userStorage = json && JSON.parse(json)
    if (dados.email === userStorage?.email && dados.senha === userStorage.senha) {
      await AsyncStorage.setItem('@token', 'tokenUser')
      verifyUser()
      getUser()
      setLogged(true)
    } else {
      Toast.show({
        type: 'error',
        text1: 'Email ou senha inválidos.'
      })
    }
  }
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@token')
    verifyUser()
  }
  const getUser = async () => {
    const json = await AsyncStorage.getItem('@user')
    const user = json && JSON.parse(json)
    setUser(user)
  }

  const verifyUser = async () => {
    const token = await AsyncStorage.getItem('@token')
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }

  useEffect(() => {
    getUser()
    verifyUser()
  }, [])

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, logged, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

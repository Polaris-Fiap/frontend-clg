/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from 'react'
import { ReactFCProps } from '../@types/geral'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Login } from '../screens'
import { api } from '../api'
import { Especialista, EspecialistaPfApi, EspecialistaPjApi, PacienteApi } from '../@types/typesApi'

interface AuthContextProps {
  logged?: boolean
  user?: PacienteApi
  especialista?: Especialista
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
  const [especialista, setEspecialista] = useState<Especialista>()

  const getUserApi = async () => {
    try {
      const response = await api.get<PacienteApi[]>('/api/paciente')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const getEspecialistaPfApi = async () => {
    try {
      const response = await api.get<EspecialistaPfApi[]>('/api/especialistaPf')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const getEspecialistaPjApi = async () => {
    try {
      const response = await api.get<EspecialistaPjApi[]>('/api/especialistaPj')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogin = async (dados: Login) => {
    if (dados.tipoUser === 'paciente') {
      const users = await getUserApi()
      const user =
        users && users.filter(info => info.email === dados.email && info.senha === dados.senha)[0]
      if (user) {
        try {
          await AsyncStorage.setItem('@UserId', JSON.stringify(user.id))
          await AsyncStorage.setItem('@TipoUser', JSON.stringify(dados.tipoUser))
          setUser(user)
          setLogged(true)
        } catch (e) {
          console.log(e)
        }
      }
    } else if (dados.tipoUser === 'especialista') {
      if (dados.tipoEspecialista === 'pf') {
        const users = await getEspecialistaPfApi()
        const user =
          users && users.filter(info => info.email === dados.email && info.senha === dados.senha)[0]
        if (user) {
          try {
            await AsyncStorage.setItem('@UserId', JSON.stringify(user.codEspecialista))
            await AsyncStorage.setItem('@TipoUser', JSON.stringify(dados.tipoEspecialista))
            setEspecialista(user)
            setLogged(true)
          } catch (e) {
            console.log(e)
          }
        }
      } else if (dados.tipoEspecialista === 'pj') {
        const users = await getEspecialistaPjApi()
        const user =
          users && users.filter(info => info.email === dados.email && info.senha === dados.senha)[0]
        if (user) {
          try {
            await AsyncStorage.setItem('@UserId', JSON.stringify(user.codEspecialista))
            await AsyncStorage.setItem('@TipoUser', JSON.stringify(dados.tipoEspecialista))
            setEspecialista(user)
            setLogged(true)
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@UserId')
    await AsyncStorage.removeItem('@TipoUser')
    verifyUser()
  }

  const verifyUser = async () => {
    const infoUser = await AsyncStorage.getItem('@UserId')
    const tipoUser = await AsyncStorage.getItem('@TipoUser')
    if (infoUser) {
      if (tipoUser === 'paciente') {
        try {
          const dados = await api.get<PacienteApi>(`/api/paciente/${infoUser}`)
          if (dados.data) {
            setLogged(true)
            setUser(dados.data)
          }
        } catch (e) {
          await AsyncStorage.removeItem('@UserId')
          await AsyncStorage.removeItem('@TipoUser')
          setLogged(false)
          setUser(undefined)
        }
      } else if (tipoUser === 'pj') {
        try {
          const dados = await api.get<EspecialistaPjApi>(`api/especialistaPj${infoUser}`)
          if (dados.data) {
            setLogged(true)
            setEspecialista(dados.data)
          }
        } catch (e) {
          await AsyncStorage.removeItem('@UserId')
          await AsyncStorage.removeItem('@TipoUser')
          setLogged(false)
          setEspecialista(undefined)
        }
      } else if (tipoUser === 'pf') {
        try {
          const dados = await api.get<EspecialistaPfApi>(`api/especialistaPf${infoUser}`)
          if (dados.data) {
            setLogged(true)
            setEspecialista(dados.data)
          }
        } catch (e) {
          await AsyncStorage.removeItem('@UserId')
          await AsyncStorage.removeItem('@TipoUser')
          setLogged(false)
          setEspecialista(undefined)
        }
      }
    } else {
      setLogged(false)
      setUser(undefined)
      setEspecialista(undefined)
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, logged, user, especialista }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

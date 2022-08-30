import { NavigationContainer } from '@react-navigation/native'
import { useContext } from 'react'
import AuthProvider, { AuthContext } from '../contexts'

import { LoggedoutRoutes } from './drawer.routes'
import { LoginRoutes } from './tab.routes'

export const Routes = () => {
  const { logged } = useContext(AuthContext)
  return (
    <AuthProvider>
      <NavigationContainer>{logged === true ? <LoginRoutes /> : <LoggedoutRoutes />}</NavigationContainer>
    </AuthProvider>
  )
}

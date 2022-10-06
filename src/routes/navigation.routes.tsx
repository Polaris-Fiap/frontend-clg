import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator()
import { Home, Login, PerfilUser, SignUpEspecialista, SignUpPaciente, SingUp } from '../screens'
import { routes } from '../utils/constants'

export const LoggedoutRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={'login'} component={Login} />
      <Screen name={'cadastro'} component={CadastroRoutes} />
    </Navigator>
  )
}

export const LoggedRoutesHome = () => {
  return (
    <Navigator initialRouteName={routes.home}>
      <Screen name={routes.home} component={Home} options={{ headerShown: false }} />
      <Screen
        name={routes.perfilUser}
        component={PerfilUser}
        options={{ headerTitle: 'Perfil', animation: 'slide_from_bottom' }}
      />
    </Navigator>
  )
}

export const CadastroRoutes = () => {
  return (
    <Navigator initialRouteName={routes.signUp} screenOptions={{ headerShown: false }}>
      <Screen name={routes.signUp} component={SingUp} />
      <Screen name={routes.signUpPaciente} component={SignUpPaciente} />
      <Screen name={routes.signUpEspecialista} component={SignUpEspecialista} />
    </Navigator>
  )
}

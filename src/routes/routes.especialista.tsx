import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PerfilEspecialista, SearchSpecialists } from '../screens'
import { routes } from '../utils/constants'

const { Navigator, Screen } = createNativeStackNavigator()

export const EspecilistaRoutes = () => {
  return (
    <Navigator initialRouteName={routes.searchSpecialists}>
      <Screen
        name={routes.searchSpecialists}
        component={SearchSpecialists}
        options={{ headerShown: false }}
      />
      <Screen
        name={routes.perfilespecialista}
        component={PerfilEspecialista}
        options={{ headerTitle: 'Perfil do especialista' }}
      />
    </Navigator>
  )
}

export default EspecilistaRoutes

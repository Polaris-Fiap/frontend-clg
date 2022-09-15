import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { routes } from '../utils/constants'
import { MaterialIcons } from '@expo/vector-icons'
import { theme } from '../styles/theme'
import EspecilistaRoutes from './routes.especialista'
import { LoggedRoutesHome } from './navigation.routes'

const { Navigator, Screen } = createBottomTabNavigator()

export const LoginRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: theme.colors.lightBlue }}>
      <Screen
        name={routes.rotasHome}
        component={LoggedRoutesHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />
        }}
      />
      <Screen
        name={routes.rotasEspecialista}
        component={EspecilistaRoutes}
        options={{
          tabBarLabel: 'Especialistas',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="group" color={color} size={size} />
        }}
      />
    </Navigator>
  )
}

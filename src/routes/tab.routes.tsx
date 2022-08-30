import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, SearchSpecialists } from '../screens'
import { routes } from '../utils/constants'
import { MaterialIcons } from '@expo/vector-icons'
import { theme } from '../styles/theme'

const { Navigator, Screen } = createBottomTabNavigator()

export const LoginRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: theme.primary }}>
      <Screen
        name={routes.home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />
        }}
      />
      <Screen
        name={routes.searchSpecialists}
        component={SearchSpecialists}
        options={{
          tabBarLabel: 'Especialistas',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="group" color={color} size={size} />
        }}
      />
    </Navigator>
  )
}

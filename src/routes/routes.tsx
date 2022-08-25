import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Screen, Navigator } = createNativeStackNavigator()
import { Home, SearchSpecialists } from "../screens"
import { routes } from "../utils/constants/routes"

export const LoginRoutes = () => {
  return (
    <Navigator>
      <Screen name={routes.home} component={Home} />
      <Screen name={routes.searchSpecialists} component={SearchSpecialists} />
    </Navigator>
  )
}

export const LoggedoutRoutes = () => {}

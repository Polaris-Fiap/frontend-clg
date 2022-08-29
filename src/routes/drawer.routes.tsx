import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Screen, Navigator } = createNativeStackNavigator()
import { Login, SignUp } from "../screens"

export const LoggedoutRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={"login"} component={Login} />
      <Screen name={"cadastro"} component={SignUp} />
    </Navigator>
  )
}

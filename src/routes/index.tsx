import { NavigationContainer } from "@react-navigation/native"

import { LoginRoutes } from "./routes"

export const Routes = () => {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  )
}

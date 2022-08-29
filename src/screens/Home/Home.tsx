import { useNavigation } from "@react-navigation/native"
import React, { useContext } from "react"
import { View, Button, StyleSheet, StatusBar } from "react-native"
import { AuthContext } from "../../contexts"
import { theme } from "../../styles/theme"
import { routes } from "../../utils/constants"

export const Home = () => {
  const navigation = useNavigation()
  const { handleLogout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Button title='Buscar especialistas' onPress={() => navigation.navigate("buscaEspecialistas")} />
      <Button title='logout' onPress={() => handleLogout()} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    backgroundColor: theme.primary,
  },
})

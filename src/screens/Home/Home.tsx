import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Button } from "react-native"
import { routes } from "../../utils/constants"

export const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: "#0099ff" }}>
      <Button title='Buscar especialistas' onPress={() => navigation.navigate("buscaEspecialistas")} />
    </View>
  )
}

export default Home

import React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { theme } from "../../styles/theme"

export const SearchSpecialists = () => {
  return <View style={styles.container}></View>
}

export default SearchSpecialists

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    backgroundColor: "#f0554a",
  },
})

import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'

export const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewBemVindo}>
        <Text style={styles.texto} variant="headlineMedium">
          Olá {user?.nome}
        </Text>
        <Text style={styles.texto} variant="bodyLarge">
          AcallMe está feliz por ter você aqui!
        </Text>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 40
  },
  viewBemVindo: {
    justifyContent: 'center',
    marginTop: 30
  },
  texto: {
    color: theme.lightBlue
  }
})

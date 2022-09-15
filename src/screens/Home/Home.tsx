import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'
import daniel from '../../assets/imgs/daniel.jpg'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
  const { user } = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewBemVindo}>
        <View>
          <Text style={styles.texto} variant="titleLarge">
            Olá
          </Text>
          <Text style={styles.textoNome} variant="headlineMedium">
            {user?.nome}
          </Text>
        </View>

        <Avatar.Image size={52} source={daniel} onTouchStart={() => navigation.navigate('perfilUser')} />
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 40
  },
  viewBemVindo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  texto: {
    color: theme.colors.lightBlue
  },
  textoNome: {
    color: theme.colors.lightBlue,
    fontFamily: theme.text.titulo
  }
})

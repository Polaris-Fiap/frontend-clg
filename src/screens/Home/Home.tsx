import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'
import { useNavigation } from '@react-navigation/native'
import Botao from '../../components/Botao'
import Texto from '../../components/Texto'

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
            {user?.nome.split(' ')[0]}
          </Text>
        </View>
        {user?.nome && (
          <Avatar.Text
            size={52}
            label={user?.nome.split(' ')[0].substring(0, 1)}
            onTouchStart={() => navigation.navigate('perfilUser')}
          />
        )}
      </View>
      <Botao nome="aula git" />
      <Texto info="aula com o prof daniel" />
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

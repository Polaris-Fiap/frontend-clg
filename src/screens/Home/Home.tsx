import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
  const { user, especialista } = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      {user && (
        <View style={styles.viewBemVindo}>
          <View>
            <Text style={styles.texto} variant="titleLarge">
              Olá
            </Text>
            <Text style={styles.textoNome} variant="headlineMedium">
              {user?.nomePaciente && user.nomePaciente.split(' ')[0]}
            </Text>
          </View>
          {user?.nomePaciente && (
            <Avatar.Text
              size={52}
              label={user?.nomePaciente.split(' ')[0].substring(0, 1)}
              onTouchStart={() => navigation.navigate('perfilUser')}
            />
          )}
        </View>
      )}
      {especialista && (
        <View style={styles.viewBemVindo}>
          <View>
            <Text style={styles.texto} variant="titleLarge">
              Olá
            </Text>
            <Text style={styles.textoNome} variant="headlineMedium">
              {especialista?.nomeEspecialista && especialista.nomeEspecialista.split(' ')[0]}
            </Text>
          </View>
          {especialista?.nomeEspecialista && (
            <Avatar.Text
              size={52}
              label={especialista?.nomeEspecialista.split(' ')[0].substring(0, 1)}
              onTouchStart={() => navigation.navigate('perfilUser')}
            />
          )}
        </View>
      )}
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

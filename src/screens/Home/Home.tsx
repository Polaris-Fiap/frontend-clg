import React, { useCallback, useContext } from 'react'
import { Alert, Linking, ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Button, Text } from 'react-native-paper'

import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
  const { user, especialista } = useContext(AuthContext)
  const navigation = useNavigation()

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL('http://t.me/Anya_ACallMe_bot')

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL('http://t.me/Anya_ACallMe_bot')
    } else {
      Alert.alert(`Don't know how to open this URL: ${'http://t.me/Anya_ACallMe_bot'}`)
    }
  }, [])

  return (
    <View style={styles.container}>
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

      <View style={styles.bot}>
        <Text>Precisa de ajuda chame nosso chatbot a Anya</Text>
        <Button onPress={() => handlePress()}>Chamar Anya</Button>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 40,
    justifyContent: 'space-between'
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
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute'
  },
  bot: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20
  }
})

import React, { useContext } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'

export const PerfilUser = () => {
  const { handleLogout, user } = useContext(AuthContext)
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.user}>
          <View style={styles.info}>
            <Text style={styles.nome}>{user?.nomePaciente}</Text>
          </View>
        </View>
        <View style={styles.infoSub}>
          <Text style={styles.titulo}>Dados</Text>
          <Text style={styles.smallText}>Email: {user?.email}</Text>
        </View>

        <Button onPress={() => handleLogout()} style={styles.botaoSair} textColor={theme.colors.cultured}>
          Sair
        </Button>
      </SafeAreaView>
    </ScrollView>
  )
}

export default PerfilUser

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center'
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  user: {
    width: 340,
    padding: 12,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  info: {
    flexDirection: 'column',
    textAlign: 'center'
  },
  infoSub: {
    width: 280,
    flexDirection: 'column',
    marginBottom: 28
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#61c8f8'
  },
  smallText: {
    fontSize: 16
  },
  scrollView: {
    backgroundColor: theme.colors.cultured
  },
  botaoSair: {
    backgroundColor: '#DB504A',
    width: 260
  }
})

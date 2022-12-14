import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { theme } from '../../styles/theme'

export interface CardEspecialistaProps {
  nome: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  especialidade: string
  tipo: string
  id: number
}

export const CardEspecialista = ({ nome, especialidade, tipo, id }: CardEspecialistaProps) => {
  const navigation = useNavigation()
  return (
    <TouchableRipple
      onPress={() => navigation.navigate('perfilEspecialista', { tipo: tipo, id: id })}
      style={{ marginBottom: 12 }}
    >
      <SafeAreaView style={styles.ViewCard}>
        <SafeAreaView style={{ justifyContent: 'center' }}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.especialidade}>{especialidade}</Text>
          <Text style={styles.textoBotao}>Ver perfil</Text>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableRipple>
  )
}

export default CardEspecialista

const styles = StyleSheet.create({
  ViewCard: {
    width: 260,
    paddingVertical: 12,
    borderRadius: 12,
    borderColor: theme.colors.lightBlue,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Imagem: {
    width: 70,
    height: 70,
    borderRadius: 12
  },
  nome: {
    color: theme.colors.lightBlue,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  especialidade: {
    color: theme.colors.lightBlue,
    fontSize: 14,
    textAlign: 'center'
  },
  textoBotao: {
    fontSize: 12,
    color: theme.colors.lightBlue,
    textAlign: 'center'
  }
})

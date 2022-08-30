import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Button, StyleSheet, StatusBar } from 'react-native'
import ContainerView from '../../components/ContainerView'
import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'
import { routes } from '../../utils/constants'

export const Home = () => {
  const navigation = useNavigation()
  const { handleLogout } = useContext(AuthContext)
  return (
    <ContainerView>
      <Button title="Buscar especialistas" onPress={() => navigation.navigate('buscaEspecialistas')} />
      <Button title="logout" onPress={() => handleLogout()} />
    </ContainerView>
  )
}

export default Home

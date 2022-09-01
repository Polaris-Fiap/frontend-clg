import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Text } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import InputSearch from '../../components/InputSearch'
import { theme } from '../../styles/theme'

export const SearchSpecialists = () => {
  const [search, setSearch] = useState<string>('')
  const navigation = useNavigation()
  return (
    <ContainerView>
      <View style={styles.container}>
        <Text variant="titleLarge" style={styles.titulo}>
          Encontre um especialista aqui
        </Text>
        <InputSearch value={search} onChangeText={setSearch} style={styles.search} />

        <Button title="Buscar especialistas" onPress={() => navigation.navigate('perfilEspecialista')} />
      </View>
    </ContainerView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    marginBottom: 12,
    textAlign: 'center',
    color: theme.lightBlue
  },
  search: {
    width: 320,
    backgroundColor: theme.cultured
  },
  container: {
    alignItems: 'center'
  },
  image: {
    width: 60
  }
})

export default SearchSpecialists

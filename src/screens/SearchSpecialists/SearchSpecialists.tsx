import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import ContainerView from '../../components/ContainerView'
import InputSearch from '../../components/InputSearch'

export const SearchSpecialists = () => {
  const [search, setSearch] = useState<string>('')
  return (
    <ContainerView>
      <View>
        <Text variant="titleLarge" style={styles.titulo}>
          Encontre um especialista aqui
        </Text>
        <InputSearch value={search} onChangeText={setSearch} />
      </View>
    </ContainerView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    marginBottom: 12,
    textAlign: 'center'
  }
})

export default SearchSpecialists

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import CardEspecialista from '../../components/CardEspecialista'
import InputSearch from '../../components/InputSearch'
import { theme } from '../../styles/theme'
import { especialistas } from '../../utils/constants/especialistas'

export const SearchSpecialists = () => {
  const [search, setSearch] = useState<string>('')
  const [listaEspecialistas, setListaEspecialistas] = useState<typeof especialistas>(especialistas)

  const changeListaEspecilista = (valor: string) => {
    setSearch(valor)
    if (valor !== '') {
      setListaEspecialistas(
        especialistas.filter(especialista => especialista.nome.toLowerCase().includes(valor.toLowerCase()))
      )
    } else {
      setListaEspecialistas(especialistas)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text variant="titleLarge" style={styles.titulo}>
            Encontre um especialista aqui
          </Text>
          <InputSearch value={search} onChangeText={changeListaEspecilista} style={styles.search} />
          {listaEspecialistas.map(especialista => (
            <CardEspecialista
              nome={especialista.nome}
              especialidade={especialista.especialidade}
              img={especialista.img}
              key={especialista.nome}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.cultured
  },
  titulo: {
    textAlign: 'center',
    color: theme.colors.lightBlue
  },
  search: {
    width: 320,
    backgroundColor: theme.colors.cultured,
    marginVertical: 24
  },
  content: {
    alignItems: 'center',
    marginTop: 20
  }
})

export default SearchSpecialists

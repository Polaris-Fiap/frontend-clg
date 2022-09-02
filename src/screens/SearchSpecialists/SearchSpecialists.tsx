/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import CardEspecialista from '../../components/CardEspecialista'
import InputSearch from '../../components/InputSearch'
import { theme } from '../../styles/theme'
import daniel from '../../assets/daniel.jpg'
import claudio from '../../assets/caludio.jpg'
import guilherme from '../../assets/guilherme.jpg'
import henrique from '../../assets/henrique.jpg'

const especialistas = [
  { nome: 'Daniel', especialidade: 'Cardiologia', img: daniel },
  { nome: 'Claudio', especialidade: 'Neurologista', img: claudio },
  { nome: 'Guilherme', especialidade: 'Cardiologia', img: guilherme },
  { nome: 'Henrique', especialidade: 'Neurologista', img: henrique }
]

export const SearchSpecialists = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text variant="titleLarge" style={styles.titulo}>
            Encontre um especialista aqui
          </Text>
          <InputSearch value={search} onChangeText={setSearch} style={styles.search} />
          {especialistas.map(especialista => (
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
    backgroundColor: theme.cultured
  },
  titulo: {
    textAlign: 'center',
    color: theme.lightBlue
  },
  search: {
    width: 320,
    backgroundColor: theme.cultured,
    marginVertical: 24
  },
  content: {
    alignItems: 'center',
    marginTop: 20
  }
})

export default SearchSpecialists

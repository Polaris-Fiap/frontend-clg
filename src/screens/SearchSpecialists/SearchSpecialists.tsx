/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { api } from '../../api'
import CardEspecialista from '../../components/CardEspecialista'
import InputSearch from '../../components/InputSearch'
import { theme } from '../../styles/theme'

export interface Especialista {
  codEspecialista: number
  nomeEspecialista: string
  tipo: 'PJ' | 'PF'
  dataNascimento: string
  email: string
  tipoEspecialidade: string
  descricaoSobre: string
  valorConsulta: string
  genero: {
    nomeGenero: string
  }
  endereco: {
    cep: string
    complemento: string
    nomeRua: string
    numeroRua: string
    bairro: {
      nomeBairro: string
      cidade: {
        nomeCidade: string
        siglaCidade: string
        estado: {
          nomeEstado: string
          siglaEstado: string
        }
      }
    }
  }
  telefone?: string
  senha: string
  cpf?: string
  cpfDigito?: string
  cnpj?: string
  cnpjDigito?: string
  razaoSocial?: string
}

export const SearchSpecialists = () => {
  const [search, setSearch] = useState<string>('')

  const [especialistas, setEspecialistas] = useState<Especialista[]>()

  // const changeListaEspecilista = (valor: string) => {
  //   setSearch(valor)
  //   if (valor !== '') {
  //     setListaEspecialistas(
  //       especialistas.filter(especialista => especialista.nome.toLowerCase().includes(valor.toLowerCase()))
  //     )
  //   } else {
  //     setListaEspecialistas(especialistas)
  //   }
  // }

  const buscarEspecialista = async () => {
    try {
      const pf = await api.get<Especialista[]>('/api/especialistaPf')
      const pj = await api.get<Especialista[]>('/api/especialistaPj')
      setEspecialistas([...pf.data, ...pj.data])
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    buscarEspecialista()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text variant="titleLarge" style={styles.titulo}>
            Encontre um especialista aqui
          </Text>
          <InputSearch value={search} onChangeText={setSearch} style={styles.search} />
          {especialistas ? (
            especialistas.map((especialista, key) => (
              <CardEspecialista
                nome={especialista.nomeEspecialista}
                tipo={especialista.tipo}
                id={especialista.codEspecialista}
                especialidade={especialista.tipoEspecialidade}
                key={`${especialista.nomeEspecialista}-${key}`}
              />
            ))
          ) : (
            <Text>Não existe especialistas no momento</Text>
          )}
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

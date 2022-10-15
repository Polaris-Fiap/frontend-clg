import { useRoute } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { api } from '../../api'
import { theme } from '../../styles/theme'
import { Especialista } from '../SearchSpecialists'

interface Params {
  tipo: string
  id: number
}

export const PerfilEspecialista = () => {
  const route = useRoute()
  const { tipo, id } = route.params as Params
  const [especialista, setEspecialista] = useState<Especialista>()

  const buscarEspecialista = async () => {
    if (tipo === 'PJ') {
      try {
        const pj = await api.get<Especialista>(`/api/especialistaPj/${id}`)
        if (pj.data) {
          setEspecialista(pj.data)
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        const pf = await api.get<Especialista>(`/api/especialistaPf/${id}`)
        if (pf.data) {
          setEspecialista(pf.data)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
  useEffect(() => {
    buscarEspecialista()
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.especialista}>
          <Text style={styles.nomeEspecialista}>{especialista?.nomeEspecialista}</Text>
          <Text style={styles.especialidade}>{especialista?.tipoEspecialidade}</Text>
        </View>
        <View style={styles.infoSub}>
          <Text style={styles.titulo}>Sobre</Text>
          <Text style={styles.smallText}>{especialista?.descricaoSobre}</Text>
        </View>
        <View style={styles.infoSub}>
          <Text style={styles.titulo}>Informações de contato</Text>
          <Text style={styles.marignText}>Email: {especialista?.email}</Text>
        </View>

        <Button style={styles.botao} textColor="white">
          Marcar consulta
        </Button>
      </SafeAreaView>
    </ScrollView>
  )
}

export default PerfilEspecialista

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center'
  },
  imagemEspecialista: {
    width: 80,
    maxHeight: 80,
    borderRadius: 12
  },
  nomeEspecialista: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  especialista: {
    width: 280,
    maxHeight: 100,
    padding: 12,
    marginBottom: 24,
    justifyContent: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#61c8f8'
  },
  especialidade: {
    fontSize: 20,
    textAlign: 'center'
  },
  smallText: {
    fontSize: 16
  },
  marignText: {
    fontSize: 12,
    marginBottom: 8
  },
  scrollView: {
    backgroundColor: theme.colors.cultured
  },
  botao: {
    backgroundColor: theme.colors.lightBlue,
    marginVertical: 10
  }
})

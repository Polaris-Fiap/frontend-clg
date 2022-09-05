import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../styles/theme'
import { especialistas } from '../../utils/constants/especialistas'

interface Params {
  nome: string
}

export const PerfilEspecialista = () => {
  const route = useRoute()
  const { nome } = route.params as Params
  const especilista = especialistas.filter(especialistas => especialistas.nome === nome)
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.especialista}>
          <Image source={especilista[0].img} style={styles.imagemEspecialista} />
          <View style={styles.info}>
            <Text style={styles.nomeEspecialista}>{especilista[0].nome}</Text>
            <Text style={styles.smallText}>{especilista[0].especialidade}</Text>
            <Text style={styles.smallText}>4 *</Text>
          </View>
        </View>
        <View style={styles.infoSub}>
          <Text style={styles.titulo}>Especialidades</Text>
          <Text style={styles.smallText}>Ecocardiografia</Text>
        </View>
        <View style={styles.infoSub}>
          <Text style={styles.titulo}>Formação acadêmica</Text>
          <Text style={styles.marignText}>
            Graduação em Medicina: Faculdade de Medicina da Universidade de Mogi das Cruzes
          </Text>
          <Text style={styles.marignText}>
            Especialização em Clínica Médica: Faculdade de Medicina da Santa Casa de Misericórdia de São
            Paulo
          </Text>
          <Text style={styles.marignText}>
            Especialização em Cardiologia: Escola Paulista de Medicina / UNIFESP
          </Text>
        </View>
        <View style={styles.infoSub}>
          <Text style={styles.titulo}>Serviços e preços</Text>
          <Text style={styles.smallText}>Preço da consulta: R$ 400</Text>
        </View>
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
    fontWeight: 'bold'
  },
  especialista: {
    width: 280,
    maxHeight: 100,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#61c8f8'
  },
  smallText: {
    fontSize: 12
  },
  marignText: {
    fontSize: 12,
    marginBottom: 8
  },
  scrollView: {
    backgroundColor: theme.cultured
  }
})

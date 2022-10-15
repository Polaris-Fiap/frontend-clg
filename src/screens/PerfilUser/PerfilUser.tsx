import React, { useContext, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Switch, Text, TextInput } from 'react-native-paper'
import { api } from '../../api'
import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'
import { useForm, Controller } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface UpdatePaciente {
  email: string
  telefone: string
  cpf: string
  estadoCivil: string
  profissao: string
}

interface UpdateEspecialista {
  email: string
  telefone: string
  descricaoSobre: string
  tipoEspecialidade: string
}

export const PerfilUser = () => {
  const { handleLogout, user, especialista } = useContext(AuthContext)
  const [habilitado, setHabilitado] = useState<boolean>(false)
  const { handleSubmit, control } = useForm<UpdatePaciente>({
    defaultValues: {
      email: user?.email,
      telefone: `${user?.telefone}`,
      cpf: `${user?.cpf}`,
      estadoCivil: user?.estadoCivil,
      profissao: user?.profissao
    }
  })

  const { handleSubmit: handleSubmitEspecialista, control: controlEspecialista } =
    useForm<UpdateEspecialista>({
      defaultValues: {
        email: especialista?.email,
        telefone: `${especialista?.telefone}`,
        descricaoSobre: especialista?.descricaoSobre,
        tipoEspecialidade: especialista?.tipoEspecialidade
      }
    })

  const excluirConta = async () => {
    try {
      await api.delete(`/api/paciente/${user?.id}`)
      handleLogout()
    } catch (e) {
      console.log(e)
    }
  }

  const excluirEspecialista = async () => {
    const tipoUser = await AsyncStorage.getItem('@TipoUser')
    if (tipoUser === 'pj') {
      try {
        await api.delete(`/api/especialistaPj/${especialista?.codEspecialista}`)
        handleLogout()
      } catch (e) {
        console.log(e)
      }
    } else if (tipoUser === 'pf') {
      try {
        await api.delete(`/api/especialistaPf/${especialista?.codEspecialista}`)
        handleLogout()
      } catch (e) {
        console.log(e)
      }
    }
  }

  const updateUser = async (dados: UpdatePaciente) => {
    const info = {
      id: user?.id,
      nomePaciente: user?.nomePaciente,
      email: dados.email,
      senha: user?.senha,
      dtNascimento: user?.dtNascimento,
      cpf: dados.cpf,
      digitoCpf: user?.digitoCpf,
      telefoneDDD: user?.telefoneDDD,
      telefone: dados.telefone,
      estadoCivil: dados.estadoCivil,
      profissao: dados.profissao,
      genero: user?.genero,
      endereco: user?.endereco,
      consulta: user?.consulta
    }
    try {
      await api.put(`/api/paciente/${user?.id}`, info)
    } catch (err) {
      console.log(err)
    }
  }

  const updateEspecialista = async (dados: UpdateEspecialista) => {
    const tipoUser = await AsyncStorage.getItem('@TipoUser')
    console.log(especialista?.codEspecialista)
    if (tipoUser === 'pf') {
      const info = {
        codEspecialista: especialista?.codEspecialista,
        nomeEspecialista: especialista?.nomeEspecialista,
        email: dados.email,
        senha: especialista?.senha,
        dtNascimento: especialista?.dtNascimento,
        telefoneDDD: especialista?.telefoneDDD,
        telefone: dados.telefone,
        descricaoSobre: dados.descricaoSobre,
        tipoEspecialidade: dados.tipoEspecialidade,
        tipo: especialista?.tipo,
        genero: especialista?.genero,
        endereco: especialista?.endereco,
        cpf: especialista?.cpf,
        digitoCpf: especialista?.digitoCpf
      }
      try {
        await api.put(`/api/especialistaPf/${especialista?.codEspecialista}`, info)
      } catch (err) {
        console.log(err)
      }
    } else if (tipoUser === 'pj') {
      const info = {
        codEspecialista: especialista?.codEspecialista,
        nomeEspecialista: especialista?.nomeEspecialista,
        email: dados.email,
        senha: especialista?.senha,
        dtNascimento: especialista?.dtNascimento,
        telefoneDDD: especialista?.telefoneDDD,
        telefone: dados.telefone,
        descricaoSobre: dados.descricaoSobre,
        tipoEspecialidade: dados.tipoEspecialidade,
        tipo: especialista?.tipo,
        genero: especialista?.genero,
        endereco: especialista?.endereco,
        cnpj: especialista?.cnpj,
        cnpjDigito: especialista?.cnpjDigito,
        razaoSocial: especialista?.razaoSocial
      }
      try {
        await api.put(`/api/especialistaPj/${especialista?.codEspecialista}`, info)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      {user && (
        <SafeAreaView style={styles.container}>
          <View style={styles.user}>
            <View style={styles.info}>
              <Text style={styles.nome}>{user?.nomePaciente}</Text>
            </View>
          </View>
          <View style={styles.infoSub}>
            <View style={styles.viewRow}>
              <Text style={styles.titulo}>Dados</Text>
              <View style={styles.viewRow}>
                <Text>Atualizar</Text>
                <Switch value={habilitado} onValueChange={setHabilitado} />
              </View>
            </View>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Email"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu email"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  disabled={habilitado === false && true}
                />
              )}
            />
            <Controller
              control={control}
              name="telefone"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Telefone"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu telefone"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  disabled={habilitado === false && true}
                />
              )}
            />
            <Controller
              control={control}
              name="cpf"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="CPF"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu cpf"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  disabled={habilitado === false && true}
                />
              )}
            />
            <Controller
              control={control}
              name="estadoCivil"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Estado Civil"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu estado civil"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  disabled={habilitado === false && true}
                />
              )}
            />
            <Controller
              control={control}
              name="profissao"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Profissão"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite sua profissão"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  disabled={habilitado === false && true}
                />
              )}
            />
          </View>

          {habilitado && (
            <Button
              onPress={handleSubmit(updateUser)}
              style={styles.botaoAtualizar}
              textColor={theme.colors.cultured}
            >
              Atualizar
            </Button>
          )}

          <Button onPress={() => handleLogout()} style={styles.botaoSair} textColor={theme.colors.cultured}>
            Sair
          </Button>

          <Button onPress={() => excluirConta()} style={styles.botaoSair} textColor={theme.colors.cultured}>
            excluir conta
          </Button>
        </SafeAreaView>
      )}
      {especialista && (
        <SafeAreaView style={styles.container}>
          <View style={styles.user}>
            <View style={styles.info}>
              <Text style={styles.nome}>{especialista?.nomeEspecialista}</Text>
            </View>
          </View>
          <View style={styles.infoSub}>
            <View style={styles.viewRow}>
              <Text style={styles.titulo}>Dados</Text>
              <View style={styles.viewRow}>
                <Text>Atualizar</Text>
                <Switch value={habilitado} onValueChange={setHabilitado} />
              </View>
            </View>

            <Controller
              control={controlEspecialista}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Email"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu email"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  disabled={habilitado === false && true}
                />
              )}
            />
            <Controller
              control={controlEspecialista}
              name="telefone"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Telefone"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu telefone"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  disabled={habilitado === false && true}
                />
              )}
            />
            <Controller
              control={controlEspecialista}
              name="descricaoSobre"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Descrição sobre"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite sua descrição"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  disabled={habilitado === false && true}
                />
              )}
            />
            <Controller
              control={controlEspecialista}
              name="tipoEspecialidade"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Tipo especialidade"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite sua especialidade"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  disabled={habilitado === false && true}
                />
              )}
            />
          </View>

          {habilitado && (
            <Button
              onPress={handleSubmitEspecialista(updateEspecialista)}
              style={styles.botaoAtualizar}
              textColor={theme.colors.cultured}
            >
              Atualizar
            </Button>
          )}

          <Button onPress={() => handleLogout()} style={styles.botaoSair} textColor={theme.colors.cultured}>
            Sair
          </Button>

          <Button
            onPress={() => excluirEspecialista()}
            style={styles.botaoSair}
            textColor={theme.colors.cultured}
          >
            excluir conta
          </Button>
        </SafeAreaView>
      )}
    </ScrollView>
  )
}

export default PerfilUser

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
    width: 340,
    flexDirection: 'column'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
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
    width: 260,
    marginTop: 20
  },
  dados: {
    marginVertical: 8
  },
  input: {
    marginTop: 20,
    backgroundColor: theme.colors.cultured,
    borderRadius: 20
  },
  viewRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  botaoAtualizar: {
    backgroundColor: '#61c8f8',
    width: 260,
    marginTop: 20
  }
})

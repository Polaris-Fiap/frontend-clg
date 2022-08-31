import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import { Button, Text, TextInput, Avatar, ProgressBar } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import { theme } from '../../styles/theme'

interface Paciente {
  nome: string
  email: string
  endereco?: string
  telefone?: string
  senha: string
}

interface Progress {
  nome: number
  dados: number
}

export const SignUp = () => {
  const navigation = useNavigation()
  const { handleSubmit, control } = useForm<Paciente>()
  const [, setPaciente] = useState<Paciente>()
  const [page, setPage] = useState<number>(0)
  const [progess, setProgress] = useState<Progress>({ nome: 0, dados: 0 })

  const onSubmit = (paciente: Paciente) => {
    console.debug(paciente)
    setPaciente(paciente)
  }

  return (
    <ContainerView>
      <View style={styles.grupoInput}>
        <Text variant="headlineMedium" style={styles.titulo}>
          Sign Up
        </Text>

        <View style={styles.viewProgress}>
          <Avatar.Icon
            icon="account"
            style={page >= 1 ? styles.iconPreenchido : styles.iconNaoPreenchido}
            size={50}
            color={page >= 1 ? theme.white : theme.lightBlue}
          />

          <ProgressBar progress={0.2} color={theme.lightBlue} />

          <Avatar.Icon
            icon="badge-account-horizontal-outline"
            style={page >= 2 ? styles.iconPreenchido : styles.iconNaoPreenchido}
            size={50}
            color={page >= 2 ? theme.white : theme.lightBlue}
          />
          <ProgressBar progress={progess.dados} color={theme.lightBlue} />
          <Avatar.Icon
            icon="lock-outline"
            style={styles.iconNaoPreenchido}
            size={50}
            color={theme.lightBlue}
          />
        </View>

        {page === 0 && (
          <View>
            <Controller
              control={control}
              name="nome"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Nome Completo"
                  mode="flat"
                  style={styles.input}
                  placeholder="Digite seu nome completo"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 1 && (
          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Email"
                  mode="flat"
                  style={styles.input}
                  placeholder="Digite seu email"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="endereco"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Endereço"
                  mode="flat"
                  style={styles.input}
                  placeholder="Digite seu endereço"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="telefone"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Telefone"
                  mode="flat"
                  style={styles.input}
                  placeholder="Digite seu telefone"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 2 && (
          <View>
            <Controller
              control={control}
              name="senha"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Senha"
                  mode="flat"
                  style={styles.input}
                  placeholder="Digite seu senha"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 0 ? (
          <Button mode="contained" style={styles.botao} onPress={() => setPage(page + 1)}>
            Proximo
          </Button>
        ) : page !== 2 ? (
          <View style={styles.viewPage}>
            <Button
              mode="contained"
              style={[styles.botao, styles.botaoPage]}
              onPress={() => setPage(page - 1)}
            >
              Voltar
            </Button>
            <Button
              mode="contained"
              style={[styles.botao, styles.botaoPage]}
              onPress={() => setPage(page + 1)}
            >
              Proximo
            </Button>
          </View>
        ) : (
          <View style={styles.viewPage}>
            <Button
              mode="contained"
              style={[styles.botao, styles.botaoPage]}
              onPress={() => setPage(page - 1)}
            >
              Voltar
            </Button>
            <Button
              mode="contained"
              style={[styles.botao, styles.botaoPage]}
              onPress={() => handleSubmit(onSubmit)}
            >
              Cadastrar
            </Button>
          </View>
        )}

        <Button onPress={() => navigation.navigate('login')}>Já tem uma conta? Entre aqui</Button>
      </View>
    </ContainerView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  grupoInput: {
    justifyContent: 'center',
    marginHorizontal: 40
  },
  input: {
    marginTop: 20,
    backgroundColor: theme.lightBlue
  },
  titulo: {
    marginBottom: 20
  },
  botao: {
    backgroundColor: theme.lightBlue,
    marginVertical: 20
  },
  texto: {
    marginBottom: 18
  },
  inputPassword: {
    marginBottom: 20
  },
  viewPage: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botaoPage: {
    width: 120
  },
  viewProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconPreenchido: {
    backgroundColor: theme.lightBlue,
    color: theme.white,
    with: 24
  },
  iconNaoPreenchido: {
    backgroundColor: theme.white,
    color: theme.lightBlue
  }
})

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import { Button, Text, TextInput, Avatar } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import { theme } from '../../styles/theme'
import Toast from 'react-native-toast-message'

export interface Paciente {
  nome: string
  email: string
  endereco?: string
  telefone?: string
  senha: string
}

export const SignUp = () => {
  const navigation = useNavigation()
  const { handleSubmit, control } = useForm<Paciente>()
  const [page, setPage] = useState<number>(0)

  const onSubmit = async (paciente: Paciente) => {
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(paciente))
      Toast.show({
        type: 'success',
        text1: 'Paciente cadastrado com sucesso'
      })
      navigation.navigate('login')
    } catch (e) {
      console.error(e)
    }
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

          <Avatar.Icon
            icon="badge-account-horizontal-outline"
            style={page >= 2 ? styles.iconPreenchido : styles.iconNaoPreenchido}
            size={50}
            color={page >= 2 ? theme.white : theme.lightBlue}
          />

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
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu nome completo"
                  activeOutlineColor={theme.lightBlue}
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
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu email"
                  activeOutlineColor={theme.lightBlue}
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
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu endereço"
                  activeOutlineColor={theme.lightBlue}
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
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu telefone"
                  activeOutlineColor={theme.lightBlue}
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
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu senha"
                  activeOutlineColor={theme.lightBlue}
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
              onPress={handleSubmit(onSubmit)}
            >
              Cadastrar
            </Button>
          </View>
        )}

        <Button onPress={() => navigation.navigate('login')} textColor={theme.lightBlue}>
          Já tem uma conta? Entre aqui
        </Button>
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
    backgroundColor: theme.cultured,
    borderRadius: 20
  },
  titulo: {
    marginBottom: 20,
    color: theme.lightBlue
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

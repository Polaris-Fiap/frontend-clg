import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useForm, Controller } from 'react-hook-form'
import { Paciente } from '../SignUp'
import Toast from 'react-native-toast-message'

interface Login {
  email: string
  senha: string
}

export const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const { handleSubmit, control } = useForm<Login>()
  const [user, setUser] = useState<Paciente>()
  const navigation = useNavigation()

  const onLogin = (dados: Login) => {
    if (dados.email === user?.email && dados.senha === user.senha) {
      handleLogin()
    } else {
      Toast.show({
        type: 'error',
        text1: 'Email ou senha inválidos.'
      })
    }
  }

  const getUser = async () => {
    try {
      const json = await AsyncStorage.getItem('@user')
      const user = json && JSON.parse(json)
      setUser(user)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ContainerView>
      <View style={styles.login}>
        <Text variant="headlineMedium" style={styles.texto}>
          Login
        </Text>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Email"
              mode="outlined"
              style={styles.input}
              placeholder="Digite seu email"
              activeOutlineColor={theme.lightBlue}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <View style={styles.viewPassword}>
          <Controller
            name="senha"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                label="Senha"
                mode="outlined"
                style={styles.input}
                placeholder="Digite sua senha"
                activeOutlineColor={theme.lightBlue}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <View style={styles.viewButtonEsqueceuSenha}>
            <Button style={styles.buttonEsqueceuSenha} textColor={theme.lightBlue}>
              Esqueceu a senha?
            </Button>
          </View>
        </View>
        <Button mode="contained" style={styles.botao} onPress={handleSubmit(onLogin)}>
          Entrar
        </Button>
        <Button onPress={() => navigation.navigate('cadastro')} textColor={theme.lightBlue}>
          Não tem conta? Cadastre-se
        </Button>
      </View>
    </ContainerView>
  )
}

export default Login

const styles = StyleSheet.create({
  login: {
    justifyContent: 'center',
    marginHorizontal: 60,
    marginVertical: 20
  },
  input: {
    marginTop: 16,
    backgroundColor: theme.cultured,
    borderRadius: 20
  },
  botao: {
    backgroundColor: theme.lightBlue,
    marginVertical: 10
  },
  texto: {
    color: theme.lightBlue
  },
  viewPassword: {
    marginBottom: 10
  },
  viewButtonEsqueceuSenha: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonEsqueceuSenha: {
    width: 160
  }
})

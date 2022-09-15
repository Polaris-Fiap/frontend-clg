import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'

import { useForm, Controller } from 'react-hook-form'

export interface Login {
  email: string
  senha: string
}

export const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const { handleSubmit, control } = useForm<Login>()

  const navigation = useNavigation()

  return (
    <ContainerView>
      <Text variant="displayMedium" style={styles.textAcallMe}>
        ACall Me
      </Text>

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
              activeOutlineColor={theme.colors.lightBlue}
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
                activeOutlineColor={theme.colors.lightBlue}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <View style={styles.viewButtonEsqueceuSenha}>
            <Button style={styles.buttonEsqueceuSenha} textColor={theme.colors.lightBlue}>
              Esqueceu a senha?
            </Button>
          </View>
        </View>
        <Button mode="contained" style={styles.botao} onPress={handleSubmit(handleLogin)}>
          Entrar
        </Button>
        <Button onPress={() => navigation.navigate('cadastro')} textColor={theme.colors.lightBlue}>
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
    backgroundColor: theme.colors.cultured,
    borderRadius: 20
  },
  botao: {
    backgroundColor: theme.colors.lightBlue,
    marginVertical: 10
  },
  texto: {
    color: theme.colors.lightBlue
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
  },
  textAcallMe: {
    fontFamily: theme.text.titulo,
    color: theme.colors.lightBlue,
    textAlign: 'center',
    marginBottom: 20
  }
})

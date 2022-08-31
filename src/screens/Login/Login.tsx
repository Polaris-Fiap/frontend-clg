import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import { AuthContext } from '../../contexts'
import { theme } from '../../styles/theme'

export const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <ContainerView>
      <View style={styles.grupoInput}>
        <Text variant="headlineMedium" style={styles.texto}>
          Login
        </Text>
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          placeholder="Digite seu email"
          activeOutlineColor={theme.lightBlue}
        />
        <View style={styles.viewPassword}>
          <TextInput
            label="Senha"
            mode="outlined"
            style={styles.input}
            placeholder="Digite sua senha"
            activeOutlineColor={theme.lightBlue}
          />
          <View style={styles.viewButtonEsqueceuSenha}>
            <Button style={styles.buttonEsqueceuSenha} textColor={theme.lightBlue}>
              Esqueceu a senha?
            </Button>
          </View>
        </View>
        <Button mode="contained" style={styles.botao} onPress={() => handleLogin()}>
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
  grupoInput: {
    justifyContent: 'center',
    marginHorizontal: 40
  },
  input: {
    marginTop: 20,
    backgroundColor: theme.cultured,
    borderRadius: 20
  },
  botao: {
    backgroundColor: theme.lightBlue,
    marginVertical: 20
  },
  texto: {
    color: theme.lightBlue
  },
  viewPassword: {
    marginBottom: 20
  },
  viewButtonEsqueceuSenha: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonEsqueceuSenha: {
    width: 160
  }
})

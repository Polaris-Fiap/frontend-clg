import React from "react"
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native"
import { TextInput, Button, Text } from "react-native-paper"
import { theme } from "../../styles/theme"

export const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.grupoInput}>
        <Text variant='headlineMedium'>Login</Text>
        <TextInput label='Email' mode='flat' style={styles.input} placeholder='Digite seu email' />
        <View style={styles.inputPassword}>
          <TextInput label='Senha' mode='flat' style={styles.input} placeholder='Digite sua senha' />
          <Button style={styles.buttonEsqueceuSenha}>Esqueceu a senha?</Button>
        </View>

        <Button mode='contained' style={styles.botao}>
          Entrar
        </Button>
        <Button>Não tem conta? Cadastre-se</Button>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  grupoInput: {
    justifyContent: "center",
    marginHorizontal: 40,
  },
  input: {
    marginTop: 20,
    backgroundColor: theme.primary,
  },
  text: {
    fontSize: 42,
  },
  botao: {
    backgroundColor: theme.primary,
    marginVertical: 20,
  },
  texto: {
    marginBottom: 18,
  },
  inputPassword: {
    marginBottom: 20,
  },
  buttonEsqueceuSenha: {
    width: 160,
  },
})

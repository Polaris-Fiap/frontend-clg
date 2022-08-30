import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import { theme } from '../../styles/theme'

export const SignUp = () => {
  const navigation = useNavigation()
  return (
    <ContainerView>
      <View style={styles.grupoInput}>
        <Text variant="headlineMedium">Sign Up</Text>
        <TextInput label="Email" mode="flat" style={styles.input} placeholder="Digite seu nome completo" />
        <TextInput label="Email" mode="flat" style={styles.input} placeholder="Digite seu email" />
        <View style={styles.inputPassword}>
          <TextInput label="Senha" mode="flat" style={styles.input} placeholder="Digite sua senha" />
        </View>

        <Button mode="contained" style={styles.botao}>
          Cadastrar
        </Button>
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
    backgroundColor: theme.primary
  },
  text: {
    fontSize: 42
  },
  botao: {
    backgroundColor: theme.primary,
    marginVertical: 20
  },
  texto: {
    marginBottom: 18
  },
  inputPassword: {
    marginBottom: 20
  },
  buttonEsqueceuSenha: {
    width: 160
  }
})

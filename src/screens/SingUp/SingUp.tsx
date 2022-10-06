import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, RadioButton, Text } from 'react-native-paper'
import ContainerView from '../../components/ContainerView'
import { theme } from '../../styles/theme'

type TipoUser = 'paciente' | 'especialista'

export const SingUp = () => {
  const [valorRadio, setValorRadio] = useState<TipoUser>('paciente')
  const navigation = useNavigation()

  const navegar = () => {
    if (valorRadio === 'paciente') {
      navigation.navigate('signUpPaciente')
    } else if (valorRadio === 'especialista') {
      navigation.navigate('signUpEspecialista')
    }
  }

  return (
    <ContainerView>
      <View style={styles.grupoInput}>
        <Text variant="headlineMedium" style={styles.titulo}>
          Escolha o tipo de usuário
        </Text>

        <View style={styles.viewProgress}>
          <Avatar.Icon
            icon="account"
            style={styles.iconNaoPreenchido}
            size={50}
            color={theme.colors.lightBlue}
          />

          <Avatar.Icon
            icon="badge-account-horizontal-outline"
            style={styles.iconNaoPreenchido}
            size={50}
            color={theme.colors.lightBlue}
          />

          <Avatar.Icon
            icon="lock-outline"
            style={styles.iconNaoPreenchido}
            size={50}
            color={theme.colors.lightBlue}
          />
        </View>

        <View style={styles.containerTipo}>
          <RadioButton.Group onValueChange={valor => setValorRadio(valor as TipoUser)} value={valorRadio}>
            <View style={styles.viewTipo}>
              <View style={styles.viewItemTipo}>
                <RadioButton value="paciente" />
                <Text>Paciente</Text>
              </View>
              <View style={styles.viewItemTipo}>
                <RadioButton value="especialista" />
                <Text>Especialista</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <Button mode="contained" style={styles.botao} onPress={() => navegar()}>
          Proximo
        </Button>

        <Button onPress={() => navigation.navigate('login')} textColor={theme.colors.lightBlue}>
          Já tem uma conta? Entre aqui
        </Button>
      </View>
    </ContainerView>
  )
}

const styles = StyleSheet.create({
  grupoInput: {
    justifyContent: 'center',
    marginHorizontal: 40
  },
  titulo: {
    marginBottom: 20,
    color: theme.colors.lightBlue
  },
  iconNaoPreenchido: {
    backgroundColor: theme.colors.white,
    color: theme.colors.lightBlue
  },
  viewTipo: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewItemTipo: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerTipo: {
    margin: 12
  },
  botao: {
    backgroundColor: theme.colors.lightBlue,
    marginVertical: 20
  },
  viewProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
export default SingUp

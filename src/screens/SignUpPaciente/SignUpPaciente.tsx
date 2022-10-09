// import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'

import { Button, Text, TextInput, Avatar, RadioButton } from 'react-native-paper'
import { api } from '../../api'
import ContainerView from '../../components/ContainerView'
import { theme } from '../../styles/theme'

export interface User {
  nome: string
  tipoUser: string
  dataNascimento: string
  email: string
  genero: {
    nomeGenero: string
  }
  endereco: {
    cep: string
    complemento: string
    nomeRua: string
    numeroRua: string
    bairro: {
      nomeBairro: string
      cidade: {
        nomeCidade: string
        siglaCidade: string
        estado: {
          nomeEstado: string
          siglaEstado: string
        }
      }
    }
  }
  telefone?: string
  senha: string
  cpf: string
  estadoCivil: string
  profissao: string
}

export const SignUpPaciente = () => {
  const navigation = useNavigation()
  const { handleSubmit, control } = useForm<User>()
  const [page, setPage] = useState<number>(0)

  const onSubmit = async (paciente: User) => {
    const pacienteUser = {
      nomePaciente: paciente.nome,
      dtNascimento: '22/08/2002',
      email: paciente.email,
      senha: paciente.senha,
      digitoCpf: 44,
      telefoneDDD: 11,
      genero: {
        nomeGenero: paciente.genero.nomeGenero
      },
      endereco: {
        cep: paciente.endereco.cep,
        complemento: paciente.endereco.complemento,
        nomeRua: paciente.endereco.nomeRua,
        numeroRua: paciente.endereco.numeroRua,
        bairro: {
          nomeBairro: paciente.endereco.bairro.nomeBairro,
          cidade: {
            nomeCidade: paciente.endereco.bairro.cidade.nomeCidade,
            siglaCidade: paciente.endereco.bairro.cidade.siglaCidade,
            estado: {
              nomeEstado: paciente.endereco.bairro.cidade.estado.nomeEstado,
              siglaEstado: paciente.endereco.bairro.cidade.estado.siglaEstado
            }
          }
        }
      },
      telefone: paciente.telefone,
      cpf: paciente.cpf,
      estadoCivil: paciente.estadoCivil,
      profissao: paciente.profissao
    }

    try {
      await api.post('/api/paciente', pacienteUser)
      navigation.navigate('login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ContainerView>
      <View style={styles.grupoInput}>
        <Text variant="headlineMedium" style={styles.titulo}>
          Cadastro de paciente
        </Text>

        <View style={styles.viewProgress}>
          <Avatar.Icon
            icon="account"
            style={page >= 1 ? styles.iconPreenchido : styles.iconNaoPreenchido}
            size={50}
            color={page >= 1 ? theme.colors.white : theme.colors.lightBlue}
          />

          <Avatar.Icon
            icon="badge-account-horizontal-outline"
            style={page >= 3 ? styles.iconPreenchido : styles.iconNaoPreenchido}
            size={50}
            color={page >= 3 ? theme.colors.white : theme.colors.lightBlue}
          />

          <Avatar.Icon
            icon="lock-outline"
            style={styles.iconNaoPreenchido}
            size={50}
            color={theme.colors.lightBlue}
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
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
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
                  placeholder="Digite seu CPF"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                />
              )}
            />
          </View>
        )}

        {page === 1 && (
          <View>
            <Controller
              control={control}
              name="profissao"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Profissão"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu profissão"
                  activeOutlineColor={theme.colors.lightBlue}
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
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
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
                />
              )}
            />
          </View>
        )}

        {page === 2 && (
          <View>
            <Controller
              control={control}
              name="endereco.bairro.cidade.estado.nomeEstado"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Estado"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu estado"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="endereco.bairro.cidade.estado.siglaEstado"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Sigla do estado"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite a sigla do seu estado"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="endereco.bairro.cidade.nomeCidade"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Cidade"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite sua cidade"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="endereco.bairro.cidade.siglaCidade"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Sigla da cidade"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite a sigla da cidade"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 3 && (
          <View>
            <Controller
              control={control}
              name="endereco.cep"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="CEP"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu CEP"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                />
              )}
            />
            <Controller
              control={control}
              name="endereco.bairro.nomeBairro"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Bairro"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite o seu Bairro"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="endereco.nomeRua"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Rua"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite sua rua"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="endereco.numeroRua"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Número"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite o número do endereço"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                />
              )}
            />

            <Controller
              control={control}
              name="endereco.complemento"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Complemento"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite o complemento"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 4 && (
          <View>
            <View style={styles.containerGenero}>
              <Text>Genero:</Text>
              <Controller
                control={control}
                name="genero.nomeGenero"
                render={({ field: { onChange, value } }) => (
                  <RadioButton.Group onValueChange={onChange} value={value}>
                    <View style={styles.viewGenero}>
                      <View style={styles.viewItemGenero}>
                        <RadioButton value="masculino" />
                        <Text>Masculino</Text>
                      </View>
                      <View style={styles.viewItemGenero}>
                        <RadioButton value="feminino" />
                        <Text>Feminino</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                )}
              />
            </View>

            <Controller
              control={control}
              name="senha"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Senha"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu senha"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 0 ? (
          <View style={styles.viewPage}>
            <Button
              mode="contained"
              style={[styles.botao, styles.botaoPage]}
              onPress={() => navigation.goBack()}
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
        ) : page !== 4 ? (
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

        <Button onPress={() => navigation.navigate('login')} textColor={theme.colors.lightBlue}>
          Já tem uma conta? Entre aqui
        </Button>
      </View>
    </ContainerView>
  )
}

export default SignUpPaciente

const styles = StyleSheet.create({
  grupoInput: {
    justifyContent: 'center',
    marginHorizontal: 40
  },
  input: {
    marginTop: 20,
    backgroundColor: theme.colors.cultured,
    borderRadius: 20
  },
  titulo: {
    marginBottom: 20,
    color: theme.colors.lightBlue
  },
  botao: {
    backgroundColor: theme.colors.lightBlue,
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
    backgroundColor: theme.colors.lightBlue,
    color: theme.colors.white,
    with: 24
  },
  iconNaoPreenchido: {
    backgroundColor: theme.colors.white,
    color: theme.colors.lightBlue
  },
  viewGenero: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewItemGenero: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerGenero: {
    margin: 12
  }
})

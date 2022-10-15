import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, RadioButton, Text, TextInput } from 'react-native-paper'
import { api } from '../../api'
import ContainerView from '../../components/ContainerView'
import { theme } from '../../styles/theme'

export interface EspecialistaCadastro {
  nomeEspecialista: string
  tipoEspecialista: 'PJ' | 'PF'
  dataNascimento: string
  email: string
  tipoEspecialidade: string
  descricaoSobre: string
  valorConsulta: string
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
  cpf?: string
  cpfDigito?: string
  cnpj?: string
  cnpjDigito?: string
  razaoSocial?: string
}

export const SignUpEspecialista = () => {
  const navigation = useNavigation()
  const { handleSubmit, control } = useForm<EspecialistaCadastro>()
  const [page, setPage] = useState<number>(0)
  const { tipoEspecialista } = useWatch({ control: control })

  const onSubmit = async (especialista: EspecialistaCadastro) => {
    const especialistaUser = {
      nomeEspecialista: especialista.nomeEspecialista,
      email: especialista.email,
      senha: especialista.senha,
      dtNascimento: '22/01/2000',
      telefoneDDD: 11,
      telefone: 11231,
      descricaoSobre: especialista.descricaoSobre,
      valorConsulta: especialista.valorConsulta,
      tipoEspecialidade: especialista.tipoEspecialidade,
      tipo: especialista.tipoEspecialista,
      genero: {
        nomeGenero: especialista.genero.nomeGenero
      },
      endereco: {
        cep: especialista.endereco.cep,
        complemento: especialista.endereco.complemento,
        nomeRua: especialista.endereco.nomeRua,
        numeroRua: especialista.endereco.numeroRua,
        bairro: {
          nomeBairro: especialista.endereco.bairro.nomeBairro,
          cidade: {
            nomeCidade: especialista.endereco.bairro.cidade.nomeCidade,
            siglaCidade: especialista.endereco.bairro.cidade.siglaCidade,
            estado: {
              nomeEstado: especialista.endereco.bairro.cidade.estado.nomeEstado,
              siglaEstado: especialista.endereco.bairro.cidade.estado.siglaEstado
            }
          }
        }
      }
    }

    try {
      if (tipoEspecialista === 'PJ') {
        await api.post('/api/especialistaPj', {
          ...especialistaUser,
          cnpj: especialista.cnpj,
          cnpjDigito: especialista.cnpjDigito,
          razaoSocial: especialista.razaoSocial
        })
      } else if (tipoEspecialista === 'PF') {
        await api.post('/api/especialistaPf', {
          ...especialistaUser,
          cpf: especialista.cpf,
          digitoCpf: especialista.cpfDigito
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ContainerView>
      <View style={styles.grupoInput}>
        <Text variant="headlineMedium" style={styles.titulo}>
          Cadastro de especialista
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
              name="tipoEspecialista"
              render={({ field: { onChange, value } }) => (
                <RadioButton.Group onValueChange={onChange} value={value}>
                  <View style={styles.viewGenero}>
                    <View style={styles.viewItemGenero}>
                      <RadioButton value="PJ" />
                      <Text>PJ</Text>
                    </View>
                    <View style={styles.viewItemGenero}>
                      <RadioButton value="PF" />
                      <Text>PF</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              )}
            />
            <Controller
              control={control}
              name="nomeEspecialista"
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
              name="tipoEspecialidade"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Especialidade"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite sua especialidade"
                  activeOutlineColor={theme.colors.lightBlue}
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
              name="valorConsulta"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Valor por consulta"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite o valor por consulta"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
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
              name="descricaoSobre"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Sobre"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Fale sobre você"
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

        {page === 4 && tipoEspecialista === 'PJ' && (
          <View>
            <Controller
              control={control}
              name="cnpj"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="CNPJ"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite seu cnpj"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                />
              )}
            />
            <Controller
              control={control}
              name="cnpjDigito"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Digito cnpj"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite o digito do cnpj"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="razaoSocial"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Razão social"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite sua razão social"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 4 && tipoEspecialista === 'PF' && (
          <View>
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
                />
              )}
            />
            <Controller
              control={control}
              name="cpfDigito"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Digito cpf"
                  mode="outlined"
                  style={styles.input}
                  placeholder="Digite o digito do cpf"
                  activeOutlineColor={theme.colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        )}

        {page === 5 && (
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
        ) : page !== 5 ? (
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

export default SignUpEspecialista

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

export interface PacienteApi {
  id: number
  nomePaciente?: string
  email?: string
  dtNascimento?: string
  senha?: string
  cpf?: number
  digitoCpf?: number
  telefoneDDD?: number
  telefone?: number
  estadoCivil?: string
  profissao?: string
  genero?: {
    nomeGenero: string
  }
  endereco?: {
    cep: number
    complemento: string
    nomeRua: string
    numeroRua: number
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  consulta?: any[]
}

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

export interface EspecialistaPfApi {
  codEspecialista: number
  nomeEspecialista?: string
  email?: string
  senha?: string
  dtNascimento?: string
  telefoneDDD?: number
  telefone?: number
  descricaoSobre?: string
  tipoEspecialidade?: string
  tipo?: string
  genero?: {
    id: number
    nomeGenero: string
  }
  endereco?: {
    id: number
    cep: number
    nomeRua: string
    numeroRua: number
    complemento: string
    bairro: {
      codBairro: number
      nomeBairro: string
      cidade: {
        codCidade: number
        nomeCidade: string
        siglaCidade: string
        estado: {
          codEstado: number
          nomeEstado: string
          siglaEstado: string
        }
      }
    }
  }
  cpf?: number
  digitoCpf?: number
}

export interface EspecialistaPjApi {
  codEspecialista: number
  nomeEspecialista?: string
  email?: string
  senha?: string
  dtNascimento?: string
  telefoneDDD?: number
  telefone?: number
  descricaoSobre?: string
  tipoEspecialidade?: string
  tipo?: string
  genero?: {
    id: number
    nomeGenero: string
  }
  endereco?: {
    id: number
    cep: number
    nomeRua: string
    numeroRua: number
    complemento: string
    bairro: {
      codBairro: number
      nomeBairro: string
      cidade: {
        codCidade: number
        nomeCidade: string
        siglaCidade: string
        estado: {
          codEstado: number
          nomeEstado: string
          siglaEstado: string
        }
      }
    }
  }
  cnpj?: number
  cnpjDigito?: number
  razaoSocial?: string
}

export interface Paciente {
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

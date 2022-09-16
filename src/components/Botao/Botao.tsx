import React from 'react'
import { Button } from 'react-native-paper'

interface BotaoProps {
  nome: string
}

export const Botao = ({ nome }: BotaoProps) => {
  return <Button>{nome}</Button>
}

export default Botao

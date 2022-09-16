import React from 'react'
import { Text } from 'react-native-paper'

interface TextoProps {
  info: string
}

export const Texto = ({ info }: TextoProps) => {
  return <Text>{info}</Text>
}

export default Texto

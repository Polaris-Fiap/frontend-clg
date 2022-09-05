import React, { useContext } from 'react'
import { Button } from 'react-native'
import ContainerView from '../../components/ContainerView'
import { AuthContext } from '../../contexts'

export const Home = () => {
  const { handleLogout } = useContext(AuthContext)
  return (
    <ContainerView>
      <Button title="logout" onPress={() => handleLogout()} />
    </ContainerView>
  )
}

export default Home

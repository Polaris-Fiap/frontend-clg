import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import AuthProvider from "./src/contexts"

import { Routes } from "./src/routes"
import Login from "./src/screens/Login"

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

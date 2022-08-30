import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthProvider from "./src/contexts"

import { Routes } from "./src/routes"
import Login from "./src/screens/Login"

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <StatusBar />
        <Routes />
      </SafeAreaView>
    </AuthProvider>
  )
}

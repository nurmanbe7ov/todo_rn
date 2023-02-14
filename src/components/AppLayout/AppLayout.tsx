import React, { ReactNode } from "react"
import { SafeAreaView } from "react-native"
import { styles } from "./AppLayout.styles"

type AppLayoutProps = {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

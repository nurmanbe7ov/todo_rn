import React from "react"
import { View, Modal, ModalProps } from "react-native"
import { styles } from "./BaseModal.styles"

export const BaseModal = ({
  visible,
  children,
  style,
  supportedOrientations
}: ModalProps) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        supportedOrientations={supportedOrientations}
      >
        <View style={[styles.background, style]}>{children}</View>
      </Modal>
    </View>
  )
}

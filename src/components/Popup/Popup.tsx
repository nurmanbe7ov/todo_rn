import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { BaseModal } from "../BaseModal/BaseModal"
import { Button } from "@react-native-material/core"
import { styles } from "./Popup.styles"

export type TPopupProps = {
  handleDelete: (e: boolean) => void
}

export const Popup = ({ handleDelete }: TPopupProps) => {
  return (
    <BaseModal>
      <TouchableOpacity
        style={styles.pressable}
        onPress={() => handleDelete(false)}
      >
        <Text style={styles.text}>Are you sure you want to delete?</Text>
        <View style={styles.content}>
          <Button
            onPress={() => handleDelete(false)}
            titleStyle={styles.titleStyle}
            color={"grey"}
            title={"Cancel"}
          />
          <Button
            onPress={() => handleDelete(true)}
            style={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            color={"red"}
            title={"Confirm"}
          />
        </View>
      </TouchableOpacity>
    </BaseModal>
  )
}

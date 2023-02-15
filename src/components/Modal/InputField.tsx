import React, { useCallback, useEffect, useState } from "react"
import { ModalProps, TouchableOpacity, TextInput, Alert } from "react-native"
import { Button } from "@react-native-material/core"
import { useAppDispatch } from "../../../store"
import { setTodos } from "../../../store/slice"
import { generateUUID } from "../../helpers/getUUID"
import { BaseModal } from "../BaseModal/BaseModal"
import { styles } from "./InputField.styles"

type TModalProps = {
  handleOpenModal: () => void
} & ModalProps

export const InputField = ({ visible, handleOpenModal }: TModalProps) => {
  const [value, setValue] = useState("")
  const [isError, setIsError] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!visible || value) {
      setIsError(false)
    }
  }, [visible, value])

  const handleAddTodo = useCallback(() => {
    if (value.trim()) {
      dispatch(
        setTodos({
          text: value,
          isCompleted: false,
          isUrgent: false,
          id: generateUUID()
        })
      )
      setValue("")
      handleOpenModal()
    } else {
      setIsError(true)
      Alert.alert("The field must not be empty")
    }
  }, [value, dispatch, handleOpenModal])

  return (
    <BaseModal
      animationType="slide"
      transparent={true}
      visible={visible}
      supportedOrientations={["portrait", "landscape"]}
    >
      <TouchableOpacity
        onPress={() => {
          if (!value) {
            setIsError(true)
          }

          handleOpenModal()
        }}
        style={styles.touchable}
      >
        <TextInput
          style={isError ? styles.emptyValue : styles.input}
          underlineColorAndroid="transparent"
          value={value}
          autoFocus={true}
          onChangeText={e => setValue(e)}
          placeholder={"Add Todo"}
          placeholderTextColor="grey"
        />
        <Button
          style={styles.button}
          color={"green"}
          title={"Add"}
          onPress={handleAddTodo}
        />
      </TouchableOpacity>
    </BaseModal>
  )
}

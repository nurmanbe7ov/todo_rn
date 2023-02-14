import React, { useCallback, useEffect, useState } from "react"
import {
  View,
  ModalProps,
  Modal as RNModal,
  TouchableOpacity,
  TextInput
} from "react-native"
import { Button } from "@react-native-material/core"
import { useAppDispatch } from "../../../store"
import { setTodos } from "../../../store/slice"
import { styles } from "./Modal.styles"
import { generateUUID } from "../../helpers/getUUID"

type TModalProps = {
  handleOpenModal: () => void
} & ModalProps

export const Modal = ({ visible, handleOpenModal }: TModalProps) => {
  const [value, setValue] = useState("")
  const [isError, setIsError] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!visible || value) {
      setIsError(false)
    }
  }, [visible, value])

  const handleAddTodo = useCallback(() => {
    if (value) {
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
    }
  }, [value, dispatch, handleOpenModal])

  return (
    <View style={styles.modalContainer}>
      <RNModal
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
          style={styles.background}
        >
          <TextInput
            style={isError ? styles.emptyValue : styles.input}
            underlineColorAndroid="transparent"
            value={value}
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
      </RNModal>
    </View>
  )
}

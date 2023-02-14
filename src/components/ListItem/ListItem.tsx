import React, { useCallback, useMemo, useState } from "react"
import { ScrollView, View } from "react-native"
import { Text } from "@react-native-material/core"
import { TodoItem } from "../TodoItem/TodoItem"
import { Modal } from "../Modal/Modal"
import { useAppDispatch, useAppSelector } from "../../../store"
import { deleteTodo, doneTodo, moveTodo } from "../../../store/slice"
import { selectTodos } from "../../../store/selectors"
import { Actions } from "../TodoItem/types"
import { useOrientation } from "../../helpers/useOrentation"
import { styles } from "./ListItem.styles"

export const ListItem = () => {
  const orientation = useOrientation()

  const orientationPortrait = orientation === "PORTRAIT"

  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const { todos } = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  const todosUrgentCount = useMemo(() => todos.filter(i => i.isUrgent), [todos])
  const todosCount = useMemo(() => todos.filter(i => !i.isUrgent), [todos])

  const handlePress = useCallback(
    ({ action, id }: { action: string; id: string }) => {
      if (action === Actions.DONE || action === Actions.UNDONE) {
        dispatch(doneTodo(id))
      } else if (action === Actions.REMOTE) {
        dispatch(deleteTodo(id))
      } else if (action === Actions.MOVE) {
        dispatch(moveTodo(id))
      }
    },
    [dispatch]
  )

  const handleOpenModal = useCallback(() => {
    setIsVisibleModal(false)
  }, [])

  return (
    <View
      style={
        orientationPortrait
          ? styles.portraitContainer
          : styles.landscapeContainer
      }
    >
      <View
        style={
          orientationPortrait
            ? styles.todosContainerPortrait
            : styles.todosContainerLandscape
        }
      >
        <View style={styles.headerContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Todos</Text>
            <Text style={styles.count}>({todosCount.length})</Text>
          </View>
          <Text style={styles.text} onPress={() => setIsVisibleModal(true)}>
            +
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {todos.map(
            todo =>
              !todo.isUrgent && (
                <TodoItem todo={todo} key={todo.id} handlePress={handlePress} />
              )
          )}
        </ScrollView>
        <Modal handleOpenModal={handleOpenModal} visible={isVisibleModal} />
      </View>
      <View
        style={orientationPortrait ? styles.linePortrait : styles.lineLandscape}
      />
      <View
        style={
          orientationPortrait
            ? styles.urgentContainerPortrait
            : styles.urgentContainerLandscape
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>Urgent Todos</Text>
          <Text
            style={
              todosUrgentCount.length >= 3 ? styles.urgentCount : styles.count
            }
          >
            ({todosUrgentCount.length})
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {todos.map(
            todo =>
              todo.isUrgent && (
                <TodoItem key={todo.id} todo={todo} handlePress={handlePress} />
              )
          )}
        </ScrollView>
      </View>
    </View>
  )
}

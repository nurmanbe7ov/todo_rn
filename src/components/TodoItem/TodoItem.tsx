import React from "react"
import { View } from "react-native"
import ContextMenu from "react-native-context-menu-view"
import { Text } from "@react-native-material/core"
import { Actions, TTodoItemProps } from "./types"
import { styles } from "./TodoItem.styles"

export const TodoItem = ({ todo, handlePress }: TTodoItemProps) => {
  const { text, id, isCompleted, isUrgent } = todo

  const doneOrUndone = { title: isCompleted ? Actions.UNDONE : Actions.DONE }

  const actionsTodos = [
    doneOrUndone,
    { title: Actions.REMOTE, systemIcon: "trash" },
    { title: Actions.MOVETONOTURGENT }
  ]

  const actionsUrgentTodos = [
    doneOrUndone,
    { title: Actions.REMOTE, systemIcon: "trash" },
    { title: Actions.MOVE }
  ]
  return (
    <View style={styles.container}>
      <ContextMenu
        previewBackgroundColor="#FFF"
        title="Actions"
        actions={isUrgent ? actionsTodos : actionsUrgentTodos}
        onPress={e => handlePress({ action: e.nativeEvent.name, id: id })}
        dropdownMenuMode={true}
      >
        <View style={styles.content}>
          <Text style={isCompleted ? styles.completedText : styles.text}>
            {text}
          </Text>
        </View>
      </ContextMenu>
    </View>
  )
}

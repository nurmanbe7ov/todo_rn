import React from "react"
import { View } from "react-native"
import ContextMenu from "react-native-context-menu-view"
import { Text } from "@react-native-material/core"
import { Actions, TTodoItemProps } from "./types"
import { styles } from "./TodoItem.styles"

export const TodoItem = ({ todo, handlePress }: TTodoItemProps) => {
  const { text, id, isCompleted, isUrgent } = todo

  const actions = [
    { title: isCompleted ? Actions.UNDONE : Actions.DONE },
    { title: Actions.REMOTE, systemIcon: "trash" }
  ]
  return (
    <View style={styles.container}>
      <ContextMenu
        previewBackgroundColor="#FFF"
        title="Actions"
        actions={isUrgent ? actions : [...actions, { title: Actions.MOVE }]}
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

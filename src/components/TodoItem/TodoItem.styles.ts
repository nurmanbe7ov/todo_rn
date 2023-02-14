import { StyleSheet } from "react-native"
import { theme } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    margin: theme.space.s,
    backgroundColor: theme.colors.primary["100"],
    borderRadius: 5
  },
  content: {
    width: "100%",
    padding: theme.space.m
  },
  text: {
    fontSize: 16,
    fontWeight: "normal"
  },
  completedText: {
    opacity: 0.5,
    textDecorationLine: "line-through"
  }
})

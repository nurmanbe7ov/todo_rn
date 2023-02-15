import { StyleSheet } from "react-native"
import { theme } from "../../theme"

export const styles = StyleSheet.create({
  pressable: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.primary["200"]
  },
  content: {
    flexDirection: "row",
    marginTop: theme.space.m
  },
  titleStyle: {
    color: theme.colors.primary["100"]
  },
  buttonStyle: {
    marginLeft: theme.space.m
  }
})

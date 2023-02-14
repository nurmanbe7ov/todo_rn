import { StyleSheet } from "react-native"
import { theme } from "../../theme"

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.primary["300"],
    flexDirection: "row"
  },
  background: {
    backgroundColor: "rgba(174,174,178, 0.8)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "70%",
    backgroundColor: theme.colors.primary["100"],
    borderRadius: 5,
    color: theme.colors.primary[400],
    fontSize: 16,
    padding: theme.space.xl
  },
  emptyValue: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.primary["300"],
    backgroundColor: theme.colors.primary["100"],
    borderRadius: 5,
    fontSize: 16,
    padding: theme.space.xl
  },
  inputStyle: {
    padding: 0,
    margin: 0
  },
  button: {
    width: "70%",
    padding: theme.space.m,
    marginTop: theme.space.m
  }
})

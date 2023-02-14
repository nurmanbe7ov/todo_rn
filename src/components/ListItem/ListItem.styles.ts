import { StyleSheet } from "react-native"
import { theme } from "../../theme"

export const styles = StyleSheet.create({
  portraitContainer: {
    width: "100%",
    padding: theme.space.xl
  },
  landscapeContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: theme.space.xl
  },
  todosContainerLandscape: {
    height: "100%",
    width: "47%"
  },

  todosContainerPortrait: {
    height: "50%"
  },

  urgentContainerLandscape: {
    height: "100%",
    width: "47%"
  },
  urgentContainerPortrait: {
    height: "50%"
  },
  lineLandscape: {
    width: 1,
    height: "100%",
    backgroundColor: theme.colors.primary["400"],
    transform: [{ rotate: "180deg" }]
  },
  linePortrait: {
    height: 1,
    width: "100%",
    backgroundColor: theme.colors.primary["400"]
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  count: {
    marginHorizontal: theme.space.m
  },
  urgentCount: {
    color: theme.colors.primary[300],
    marginHorizontal: theme.space.m
  },
  title: {
    fontSize: 25,
    marginVertical: theme.space.m
  },
  text: {
    fontSize: 40
  }
})

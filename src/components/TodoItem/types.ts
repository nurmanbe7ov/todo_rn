import { TTodo } from "../../../store/types"

export enum Actions {
  DONE = "Done",
  UNDONE = "Undone",
  REMOTE = "Remove",
  MOVE = "Move to urgent"
}

export type TTodoItemProps = {
  todo: TTodo
  handlePress: ({ action, id }: { action: string; id: string }) => void
}

import { useContext } from "react";
import { TasksContext } from "./tasksContextCore";

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks должен использоваться внутри TasksProvider");
  }

  return context;
}

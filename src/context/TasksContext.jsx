import { useCallback, useEffect, useState } from "react";
import { getTasks } from "../api/tasks";
import { TasksContext } from "./tasksContextCore";

export function TasksProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setCards([]);
      setError("Необходима авторизация");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const data = await getTasks({ token });

      setCards(data.tasks || []);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <TasksContext.Provider value={{ cards, isLoading, error, fetchTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

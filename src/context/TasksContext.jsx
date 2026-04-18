import { useCallback, useEffect, useState } from "react";
import { deleteTask, editTask, getTasks, postTask } from "../api/tasks";
import { TasksContext } from "./tasksContextCore";

const getTaskId = (task) => task?._id || task?.id;

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

  const createTask = useCallback(async (taskData) => {
    const token = localStorage.getItem("token");
    const createdTask = await postTask({ token, taskData });

    setCards((prevCards) => [...prevCards, createdTask]);
    return createdTask;
  }, []);

  const updateTask = useCallback(async (id, taskData) => {
    const token = localStorage.getItem("token");
    const updatedTask = await editTask({ token, id, taskData });
    const updatedTaskId = getTaskId(updatedTask) || id;

    setCards((prevCards) =>
      prevCards.map((card) => (getTaskId(card) === updatedTaskId ? updatedTask : card))
    );

    return updatedTask;
  }, []);

  const removeTask = useCallback(async (id) => {
    const token = localStorage.getItem("token");

    await deleteTask({ token, id });
    setCards((prevCards) => prevCards.filter((card) => getTaskId(card) !== id));
  }, []);

  return (
    <TasksContext.Provider value={{ cards, isLoading, error, fetchTasks, createTask, updateTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
}

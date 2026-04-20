import { useCallback, useEffect, useState } from "react";
import { deleteTask, editTask, getTasks, postTask } from "../api/tasks";
import { TasksContext } from "./tasksContextCore";
import { useAuth } from "./useAuth";

const getTaskId = (task) => task?._id || task?.id;

export function TasksProvider({ children }) {
  const { token } = useAuth();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(token));
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    if (!token) {
      setCards([]);
      setError(null);
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
  }, [token]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = useCallback(async (taskData) => {
    const createdTask = await postTask({ token, taskData });

    setCards((prevCards) => [...prevCards, createdTask]);
    return createdTask;
  }, [token]);

  const updateTask = useCallback(async (id, taskData) => {
    const updatedTask = await editTask({ token, id, taskData });
    const updatedTaskId = getTaskId(updatedTask) || id;

    setCards((prevCards) =>
      prevCards.map((card) =>
        getTaskId(card) === updatedTaskId
          ? { ...card, ...taskData, ...updatedTask, _id: updatedTaskId }
          : card
      )
    );

    return updatedTask;
  }, [token]);

  const deleteTaskById = useCallback(async (id) => {
    await deleteTask({ token, id });
    setCards((prevCards) => prevCards.filter((card) => getTaskId(card) !== id));
  }, [token]);

  return (
    <TasksContext.Provider value={{ cards, isLoading, error, fetchTasks, addTask, updateTask, deleteTask: deleteTaskById }}>
      {children}
    </TasksContext.Provider>
  );
}

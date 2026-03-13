import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

// Получение списока задач
export async function getTasks({ token }) {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Получить задачу по ID
export async function getTaskById({ token, id }) {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Добавление задачи в список
export async function postTask({ token, taskData }) {
  const response = await axios.post(API_URL, taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": null,
    },
  });
  return response.data;
}

// Изменить задачу
export async function editTask({ token, id, taskData }) {
  const response = await axios.put(`${API_URL}/${id}`, taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": null,
    },
  });
  return response.data;
}

// Удалить задачу
export async function deleteTask({ token, id }) {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
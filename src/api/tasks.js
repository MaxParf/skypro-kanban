const API_URL = "https://wedev-api.sky.pro/api/kanban";

// Получение списка задач
export async function getTasks({ token }) {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при получении задач");
  }

  const data = await response.json();
  return data; // Вернет { tasks: [...] }
}

// Добавление задачи
export async function postTask({ token, taskData }) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Ошибка при создании задачи");
  }

  return await response.json();
}

// Удалить задачу
export async function deleteTask({ token, id }) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при удалении задачи");
  }

  return await response.json();
}

// Изменить задачу (PUT)
export async function editTask({ token, id, taskData }) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error("Ошибка при редактировании задачи");
  }

  return await response.json();
}
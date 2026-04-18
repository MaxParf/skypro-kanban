const API_URL = "https://wedev-api.sky.pro/api/kanban";

async function getErrorMessage(response, fallbackMessage) {
  const errorData = await response.json().catch(() => ({}));
  return errorData.error || fallbackMessage;
}

// Получение списка задач
export async function getTasks({ token }) {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Ошибка при получении задач"));
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
    throw new Error(await getErrorMessage(response, "Ошибка при создании задачи"));
  }

  const data = await response.json();
  return data.task || data;
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
    throw new Error(await getErrorMessage(response, "Ошибка при удалении задачи"));
  }

  return await response.json().catch(() => undefined);
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
    throw new Error(await getErrorMessage(response, "Ошибка при редактировании задачи"));
  }

  const data = await response.json();
  return data.task || data;
}

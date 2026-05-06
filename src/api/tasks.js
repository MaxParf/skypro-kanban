const API_URL = "https://wedev-api.sky.pro/api/kanban";

async function getErrorMessage(response, fallbackMessage) {
  const errorData = await response.json().catch(() => ({}));
  return errorData.error || fallbackMessage;
}

const getTaskId = (task) => task?._id || task?.id;

function normalizeTask(task, fallbackId) {
  if (!task) {
    return task;
  }

  if (!task._id && task.id) {
    return { ...task, _id: task.id };
  }

  if (!task._id && fallbackId) {
    return { ...task, _id: fallbackId };
  }

  return task;
}

function getTaskFromResponse(data, id) {
  if (Array.isArray(data)) {
    const task = id ? data.find((item) => getTaskId(item) === id) : data.at(-1);
    return normalizeTask(task, id);
  }

  if (data.task) {
    return normalizeTask(data.task, id);
  }

  if (Array.isArray(data.tasks)) {
    const task = id ? data.tasks.find((item) => getTaskId(item) === id) : data.tasks.at(-1);
    return normalizeTask(task, id);
  }

  return normalizeTask(data, id);
}

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
  return data;
}

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
  return getTaskFromResponse(data);
}

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
  return getTaskFromResponse(data, id);
}

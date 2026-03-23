const USER_URL = "https://wedev-api.sky.pro/api/user";

// ФУНКЦИЯ ВХОДА
export async function signIn({ login, password }) {
  const response = await fetch(`${USER_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Ошибка авторизации");
  }
  return data; // Возвращаем { user, token }
}

// ФУНКЦИЯ РЕГИСТРАЦИИ (Добавили обратно, чтобы Register.jsx не ругался)
export async function signUp({ login, name, password }) {
  const response = await fetch(USER_URL, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Ошибка при регистрации");
  }
  return data; // Возвращаем { user, token }
}
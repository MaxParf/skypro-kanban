const USER_URL = "https://wedev-api.sky.pro/api/user";

async function getErrorMessage(response, fallbackMessage) {
  const errorData = await response.json().catch(() => ({}));
  return errorData.error || fallbackMessage;
}

export async function signIn({ login, password }) {
  const response = await fetch(`${USER_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Ошибка авторизации"));
  }

  const data = await response.json();
  return data;
}

export async function signUp({ login, name, password }) {
  const response = await fetch(USER_URL, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Ошибка при регистрации"));
  }

  const data = await response.json();
  return data;
}

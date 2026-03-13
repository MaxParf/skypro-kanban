import axios from "axios";

const USER_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(`${USER_URL}/login`, { login, password }, {
      headers: { "Content-Type": null }
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Неверный логин или пароль");
  }
}

export async function signUp({ login, name, password }) {
  try {
    const response = await axios.post(USER_URL, { login, name, password }, {
      headers: { 
        "Content-Type": null // Исправляет ошибку 400 на скриншоте
      }
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка при регистрации");
  }
}
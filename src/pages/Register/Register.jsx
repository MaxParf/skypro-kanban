import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth"; 
import * as S from "./Register.styled";

export default function Register({ setIsAuth }) {
  const navigate = useNavigate();

  // Состояние полей ввода
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // Состояние для текста ошибки
  const [error, setError] = useState("");

  // Состояние ошибки для пользователя
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Валидация перед запросом
    if (!formData.name.trim() || !formData.login.trim() || !formData.password.trim()) {
      setError("Заполните все поля");
      return;
    }

    try {
      // Отправка данных на сервер
      const data = await signUp({
        name: formData.name,
        login: formData.login,
        password: formData.password,
      });

      if (data) {
        // Сохраняем данные пользователя с его токеном в localStorage
        localStorage.setItem("user", JSON.stringify(data));
        setIsAuth(true);
        navigate("/");
      }
    } catch (err) {
      // Если ошибка от API
      setError(err.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalTitle>Регистрация</S.ModalTitle>
        <S.Form onSubmit={handleRegister}>
          <S.Input 
            type="text" 
            name="name" // сверка имени
            placeholder="Имя" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <S.Input 
            type="email" 
            name="login" // API ждет ключ login
            placeholder="Эл. почта" 
            value={formData.login} 
            onChange={handleChange} 
          />
          <S.Input 
            type="password" 
            name="password" 
            placeholder="Пароль" 
            value={formData.password} 
            onChange={handleChange} 
          />
          
          {/* Вывод ошибки для пользователю */}
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <S.ButtonRegister type="submit">
            Зарегистрироваться
          </S.ButtonRegister>

          <S.FormGroup>
            <p>Уже есть аккаунт?</p>
            <Link to="/login">Войдите здесь</Link>
          </S.FormGroup>
        </S.Form>
      </S.Modal>
    </S.Wrapper>
  );
}
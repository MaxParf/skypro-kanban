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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true);
      // Отправка данных на сервер
      const data = await signUp({
        name: formData.name,
        login: formData.login,
        password: formData.password,
      });

      const user = data.user || data;
      const token = user.token || data.token;

      if (user && token) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setIsAuth(true);
        navigate("/");
      } else {
        setError("Ошибка: сервер не прислал токен доступа");
      }
    } catch (err) {
      // Если ошибка от API
      setError(err.message);
    } finally {
      setIsSubmitting(false);
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

          <S.ButtonRegister type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
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

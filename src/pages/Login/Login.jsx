import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../../api/auth"; // Импортируем API функцию
import * as S from "./Login.styled";

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();

  // Состояние полей ввода
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  // Состояние отображения ошибки для пользователя
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  // Отправка формы
  const handleLogin = async (e) => {
    e.preventDefault(); // Чтобы страница не перезагружалась при клике

    // Валидация перед отправкой
    if (!formData.login.trim() || !formData.password.trim()) {
      setError("Заполните все поля");
      return;
    }

    try {
      // Вызов API запроса
      const data = await signIn({
        login: formData.login,
        password: formData.password,
      });

      if (data) {
        // Если ОК: сохраняем пользователя и меняем статус
        localStorage.setItem("user", JSON.stringify(data));
        setIsAuth(true);
        navigate("/");
      }
    } catch (err) {
      // Если вернул ошибку выводим её например 401
      setError(err.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalTitle>Вход</S.ModalTitle>
        <S.Form onSubmit={handleLogin}>
          
          <S.Input 
            type="text" 
            name="login"
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

          {/* Подсвечиваем ошибку красным цветом */}
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <S.ButtonEnter type="submit">Войти</S.ButtonEnter>
          
          <S.FormGroup>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </S.FormGroup>
        </S.Form>
      </S.Modal>
    </S.Wrapper>
  );
}
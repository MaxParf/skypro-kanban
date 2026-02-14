import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as S from "./Login.styled";

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Чтобы страница не перезагружалась при клике
    setIsAuth(true);
    navigate("/");
  };

  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalTitle>Вход</S.ModalTitle>
        <S.Form>
          <S.Input type="text" placeholder="Эл. почта" />
          <S.Input type="password" placeholder="Пароль" />
          <S.ButtonEnter onClick={handleLogin}>Войти</S.ButtonEnter>
          <S.FormGroup>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </S.FormGroup>
        </S.Form>
      </S.Modal>
    </S.Wrapper>
  );
}
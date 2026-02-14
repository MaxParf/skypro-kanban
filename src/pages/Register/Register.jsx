import { Link, useNavigate } from "react-router-dom";
import * as S from "./Register.styled";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Здесь позже будет логика регистрации, а пока просто редирект на логин
    navigate("/login");
  };

  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalTitle>Регистрация</S.ModalTitle>
        <S.Form>
          <S.Input type="text" placeholder="Имя" />
          <S.Input type="email" placeholder="Эл. почта" />
          <S.Input type="password" placeholder="Пароль" />
          
          <S.ButtonRegister onClick={handleRegister}>
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
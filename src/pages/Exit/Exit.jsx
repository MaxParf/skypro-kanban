import { useNavigate } from "react-router-dom";
import * as S from "./Exit.styled";

export default function Exit({ setIsAuth }) {
  const navigate = useNavigate();

  return (
    <S.ExitWrapper>
      <S.ExitBlock>
        <S.ExitTitle>Выйти из аккаунта?</S.ExitTitle>
        <S.ExitButtonGroup>
          <S.ExitButton $primary onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setIsAuth(false);
            navigate("/login");
          }}>
            Да, выйти
          </S.ExitButton>
          <S.ExitButton onClick={() => navigate("/")}>
            Нет, остаться
          </S.ExitButton>
        </S.ExitButtonGroup>
      </S.ExitBlock>
    </S.ExitWrapper>
  );
}

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import * as S from "./Exit.styled";

export default function Exit() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <S.ExitWrapper>
      <S.ExitBlock>
        <S.ExitTitle>Выйти из аккаунта?</S.ExitTitle>
        <S.ExitButtonGroup>
          <S.ExitButton $primary onClick={() => {
            logout();
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

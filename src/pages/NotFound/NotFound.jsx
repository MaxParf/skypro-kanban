import { useNavigate } from "react-router-dom";
import * as S from "./NotFound.styled";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Title>404</S.Title>
      <S.Subtitle>Упс! Страница не найдена</S.Subtitle>
      <S.HomeLink onClick={() => navigate("/")}>
        Вернуться на главную
      </S.HomeLink>
    </S.Wrapper>
  );
}
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import * as S from "./Header.styled";

export default function Header() {
  const { user } = useAuth();

  const userName = user?.name || user?.login || "Пользователь";

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>

          <S.HeaderNav>
            <S.HeaderButton as={Link} to="/add-task" id="btnMainNew">
              Создать новую задачу
            </S.HeaderButton>

            <Link to="/exit">
              <S.HeaderUser as="span">
                {userName}
              </S.HeaderUser>
            </Link>
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}

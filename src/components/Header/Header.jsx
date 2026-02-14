import { Link } from "react-router-dom";
import * as S from "./Header.styled";

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to="/">
              <img src="images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>

          <S.HeaderNav>
            {/* 1. Клик по кнопке теперь ведет на /add-task */}
            <Link to="/add-task">
              <S.HeaderButton id="btnMainNew">
                Создать новую задачу
              </S.HeaderButton>
            </Link>

            {/* 2. Клик по пользователю теперь ведет на /exit */}
            <Link to="/exit">
              <S.HeaderUser as="span">
                Ivan Ivanov
              </S.HeaderUser>
            </Link>
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}
import * as S from "./Header.styled"; // Импортируем все стили как объект S

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderBlock>
          {/* Логотип */}
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>

          {/* Навигация */}
          <S.HeaderNav>
            <S.HeaderButton id="btnMainNew">
              Создать новую задачу
            </S.HeaderButton>
            <S.HeaderUser>
              Ivan Ivanov
            </S.HeaderUser>
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}
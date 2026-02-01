import styled from "styled-components";
import { colors } from "../../theme";

// Основная секция main
export const MainContainer = styled.main`
  width: 100%;
  background-color: ${colors.background};
`;

// Ограничитель ширины контента (аналогично Header)
export const MainBlock = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

// Контейнер сетки столбцов
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0;

  // Адаптация под моб.устр.
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
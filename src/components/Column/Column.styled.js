import styled from "styled-components";

// Сама колонка
export const MainColumn = styled.div`
  width: 20%; // Пять колонок по 20% ширины каждая
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 40px;
  }
`;

// Название колонки
export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  & p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

// Контейнер для карточек внутри колонки
export const ColumnCards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    display: flex;
    overflow-y: auto;
  }
`;
import styled from "styled-components";

export const PopBrowse = styled.div`
  display: flex;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  /* Показываем при переходе по ссылке (клик на карточку) */
  &:target {
    display: block;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const PopBrowseTtl = styled.h3`
  font-family: "Roboto", sans-serif;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

// Текст: Даты:
export const PopBrowseSubttl = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000;
  margin-bottom: 14px;
`;

// Сентябрь 2023
export const CalendarMonth = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #94A6BE;
`;

// Кнопка Закрыть
export const PopBrowseBtnClose = styled.button`
  width: 86px;
  height: 30px;
  border-radius: 4px;
  padding: 10px 14px;
  background: #565EEF;
  border: none;
  opacity: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  // Текст кнопки внутри
  span, a {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFFFF;
  }
`;

// Вспомогательный компонент для текста внутри кнопки, если нужно отдельно
export const BtnText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  color: #FFFFFF;
`;

export const PopBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  margin-top: 14px;
  height: 200px;
`;
import styled from "styled-components";

export const PopNewCard = styled.div`
  display: flex; 
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

// Заголовок "Создание задачи"
export const PopNewCardTtl = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000;
  margin-bottom: 20px;
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Подзаголовки (Описание, Даты)
export const Subttl = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 14px;
  margin-top: 10px;
`;

// Инпут названия задачи
export const PopNewCardInput = styled.input`
  width: 370px;
  height: 49px;
  border-radius: 8px;
  border: 0.7px solid #D4DBE5;
  padding: 14px;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #94A6BE;
  }
`;

// Инпут описания задачи
export const PopNewCardArea = styled.textarea`
  width: 370px;
  height: 200px;
  border-radius: 8px;
  border: 0.7px solid #D4DBE5;
  padding: 14px;
  outline: none;
  resize: none;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #94A6BE;
  }
`;

// Сентябрь 2023
export const CalendarMonth = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #94A6BE;
`;

// Кнопка "Создать задачу"
export const PopNewCardBtnAction = styled.button`
  width: 132px;
  height: 30px;
  border-radius: 4px;
  padding: 10px 14px;
  background: #565EEF;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  &:hover {
    background-color: #33399b;
  }
`;

export const BtnText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  text-align: center;
  color: #FFFFFF;
`;
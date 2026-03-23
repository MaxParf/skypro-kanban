import styled from "styled-components";

const topicStyles = {
  "Web Design": {
    bg: "#FFE4C2",
    text: "#FF6D00",
  },
  "Research": {
    bg: "#B4FDD1",
    text: "#06B16E",
  },
  "Copywriting": {
    bg: "#E9D4FF",
    text: "#9A48F1",
  },
};

export const PopNewCard = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const PopNewCardBlock = styled.div`
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const PopNewCardTtl = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const PopNewCardForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 14px;
  color: #000;
`;

export const PopNewCardInput = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: 0.7px solid #D4DBE5;
  outline: none;
  &::placeholder { color: #94A6BE; }
`;

export const PopNewCardArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 14px;
  border-radius: 8px;
  border: 0.7px solid #D4DBE5;
  resize: none;
  outline: none;
  &::placeholder { color: #94A6BE; }
`;

export const PopNewCardCalendar = styled.div`
  width: 182px;
`;

export const CalendarPeriodText = styled.p`
  font-size: 10px;
  color: #94A6BE;
  margin-top: 8px;
  span { color: #000; font-weight: 600; }
`;

export const PopNewCardCategories = styled.div`
  margin-top: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  padding-top: 14px;
  gap: 10px;
`;

export const CategoriesTheme = styled.div`
  padding: 8px 20px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ $topic }) => topicStyles[$topic]?.bg || "#EDEFF6"};
  opacity: ${({ $active }) => ($active ? "1" : "0.4")};

  p {
    font-size: 14px;
    font-weight: 600;
    color: ${({ $topic }) => topicStyles[$topic]?.text || "#94A6BE"};
  }

  &:hover {
    opacity: 1;
  }
`;

export const PopNewCardBtnAction = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  float: right;
  font-weight: 500;
  &:hover {
    background-color: #33399b;
  }
`;
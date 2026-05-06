import styled from "styled-components";
import { colors } from "../../theme";

export const CardItem = styled.div`
  padding: 5px;
  animation: card-ani 0.5s ease-in-out forwards;
`;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${colors.cardBackground || "#FFFFFF"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $colorObj }) => $colorObj.bg || colors.topicGray.bg};

  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $colorObj }) => $colorObj.text || colors.topicGray.text};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }

  & svg {
    width: 13px;
  }
`;

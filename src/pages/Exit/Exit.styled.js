import styled from "styled-components";

export const ExitWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ExitBlock = styled.div`
  background: #FFFFFF;
  width: 100%;
  max-width: 370px;
  padding: 50px 60px;
  border-radius: 10px;
  text-align: center;
`;

export const ExitTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ExitButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const ExitButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  border: ${props => props.$primary ? "none" : "0.7px solid #565EEF"};
  background-color: ${props => props.$primary ? "#565EEF" : "transparent"};
  color: ${props => props.$primary ? "#FFFFFF" : "#565EEF"};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.$primary ? "#33399b" : "#EAEEF6"};
  }
`;
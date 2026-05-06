import styled from "styled-components";
import { colors } from "../../theme";

export const MainContainer = styled.main`
  width: 100%;
  background-color: ${colors.background};
`;

export const MainBlock = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EmptyState = styled.div`
  width: 100%;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 18px;
  font-weight: 500;
`;

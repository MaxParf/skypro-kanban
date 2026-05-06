import styled from "styled-components";
import { colors } from "../../theme";

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.cardBackground};
`;

export const HeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
`;

export const HeaderLogo = styled.div`
  width: 85px;
  & img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: #FFFFFF;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.primary};
  font-weight: 500;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${colors.primary};
    border-bottom: 1.9px solid ${colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: ${colors.primaryHover};
    &::after {
      border-color: ${colors.primaryHover};
    }
  }
`;


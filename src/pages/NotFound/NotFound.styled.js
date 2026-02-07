import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #EAEEF6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 100px;
  color: #565EEF;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: #94A6BE;
  margin-bottom: 30px;
`;

export const HomeLink = styled.button`
  width: 178px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;
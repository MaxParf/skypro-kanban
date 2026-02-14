import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #EAEEF6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 368px;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 50px 60px;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 10px 8px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 7px;

  &::placeholder {
    color: #94A6BE;
  }
`;

export const ButtonEnter = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

export const FormGroup = styled.div`
  text-align: center;
  p, a {
    font-size: 14px;
    color: #94A6BE;
  }
  a {
    text-decoration: underline;
    margin-left: 5px;
  }
`;
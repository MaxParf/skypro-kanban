import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #EAEEF6;
`;

export const LoaderBox = styled.div`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const LoaderSpinner = styled.div`
  width: 42px;
  height: 42px;
  border: 4px solid rgba(148, 166, 190, 0.35);
  border-top-color: #565EEF;
  border-radius: 50%;
  animation: loader-spin 0.8s linear infinite;

  @keyframes loader-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderText = styled.p`
  color: #94A6BE;
  font-size: 14px;
  font-weight: 500;
`;

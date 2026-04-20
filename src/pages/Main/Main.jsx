import { Outlet } from "react-router-dom"; 
import Header from "../../components/Header/Header"; 
import MainContent from "../../components/Main/Main"; 
import { GlobalStyle } from "../../GlobalStyle.styled"; 
import * as S from "../../App.styled"; 
import { useTasks } from "../../context/useTasks";

export default function Main() {
  const { isLoading, error } = useTasks();

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <Outlet />
        
        <Header />

        {error && <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{error}</p>}

        {isLoading ? (
          <div className="loader-container">
            <p className="loader-text">Данные загружаются...</p>
          </div>
        ) : (
          <MainContent />
        )}
      </S.Wrapper>
    </>
  );
}

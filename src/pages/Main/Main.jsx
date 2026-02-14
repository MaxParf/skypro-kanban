import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; // [cite: 92]
import Header from "../../components/Header/Header"; // [cite: 92]
import MainContent from "../../components/Main/Main"; // [cite: 92]
import { cardList } from "../../data"; // [cite: 94]
import { GlobalStyle } from "../../GlobalStyle.styled"; // [cite: 94]
import * as S from "../../App.styled"; // [cite: 94]

export default function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        {/* Модалки (AddTask, CardPage, Exit) рендерим здесь */}
        <Outlet /> 
        
        <Header />

        {isLoading ? (
          <div className="loader-container">
            <p className="loader-text">Данные загружаются...</p>
          </div>
        ) : (
          <MainContent cards={cards} />
        )}
      </S.Wrapper>
    </>
  );
}
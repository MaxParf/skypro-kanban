import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import MainContent from "../../components/Main/Main";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";
import PopNewCard from "../../components/Popups/PopNewCard/PopNewCard";

import { cardList } from "../../data";
import { GlobalStyle } from "../../GlobalStyle.styled";
import * as S from "../../App.styled";

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
        <PopNewCard />
        <PopBrowse />
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

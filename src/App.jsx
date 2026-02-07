import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
// import PopUser from "./components/Popups/PopUser/PopUser"; переезжает в Хидер
import { cardList } from "./data";
import { GlobalStyle } from "./GlobalStyle.styled"; // Все базовые стили
import * as S from "./App.styled";


// import "./App.css";

function App() {
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
      <GlobalStyle /> {/* Применяется ко всему приложению */}
      <S.Wrapper> 
        {/* Оставляем только нужные компоненты */}
        <PopNewCard />
        <PopBrowse />
        <Header />

        {/* Условный рендеринг */}
        {isLoading ? (
          <div className="loader-container">
            <p className="loader-text">Данные загружаются...</p>
          </div>
        ) : (
          <Main cards={cards} /> 
        )}
      </S.Wrapper>
    </>
  );
}

export default App;

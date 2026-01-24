import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
// import PopUser from "./components/Popups/PopUser/PopUser"; переезжает в Хидер
import { cardList } from "./data";

import "./App.css";

function App() {
  const [cards, setCards] = useState([]); // Состояние для карточек
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    // Имитация загрузки через 2 секунды
    const timer = setTimeout(() => {
      setCards(cardList); // Записываем данные в состояние
      setIsLoading(false); // Выключаем лоадер
    }, 2000);

    return () => clearTimeout(timer); // Очистка таймера
  }, []);

  return (
    <div className="wrapper">
      {/* PopUser теперь внутри Header, здесь его нет */}
      <PopNewCard />
      <PopBrowse />
      <Header />

      {/* Рендерим либо загрузку, либо основной контент */}
      {isLoading ? (
        <div className="loader-container">
          <p className="loader-text">Данные загружаются...</p>
        </div>
      ) : (
        <Main cards={cards} /> 
      )}
    </div>
  );
}

export default App;

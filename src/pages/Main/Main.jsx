import { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom"; 
import Header from "../../components/Header/Header"; 
import MainContent from "../../components/Main/Main"; 
import { getTasks } from "../../api/tasks"; // Импорт функции запроса
import { GlobalStyle } from "../../GlobalStyle.styled"; 
import * as S from "../../App.styled"; 

export default function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Состояние для ошибок

  // Выносим функцию загрузки, чтобы её можно было передать в Outlet
  const fetchTasks = useCallback(async () => {
  const token = localStorage.getItem("token"); 

  if (!token) {
    setError("Необходима авторизация");
    setIsLoading(false);
    return;
  }

  try {
    setIsLoading(true);
    const data = await getTasks({ token });
    
    setCards(data.tasks || []); 
    setError(null);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
}, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        {/* Рендер модалок (AddTask, CardPage, Exit) */}
        {/* Добавлена правка: передаем cards в context, чтобы PopBrowse мог найти задачу по ID */}
        <Outlet context={{ cards, fetchTasks }} /> 
        
        <Header />

        {error && <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{error}</p>}

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
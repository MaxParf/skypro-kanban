import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { postTask } from "../../../api/tasks"; // Импорт функции добавления
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";

function PopNewCard() {
  const navigate = useNavigate();
  const { fetchTasks } = useOutletContext(); // Получаем функцию обновления из Main.jsx

  // Состояние для полей формы (двустороннее связывание по конспекту)
  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const [selectedDate, setSelectedDate] = useState(new Date()); // Состояние для календаря
  const [error, setError] = useState("");

  // Функция отслеживания изменений в полях
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  // Функция отправки формы
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (!newTask.title.trim() || !newTask.topic || !newTask.description.trim()) {
      setError("Заполните все поля и выберите категорию");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    try {
      const taskData = {
        ...newTask,
        date: selectedDate,
      };

      await postTask({ token, taskData }); // Отправка на сервер
      await fetchTasks(); // Обновление списка задач
      navigate("/"); // Закрываем модалку
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
          
          <S.PopNewCardForm onSubmit={handleFormSubmit}>
            <S.PopNewCardInput 
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              placeholder="Введите название задачи..." 
            />
            
            <S.Subttl>Описание задачи</S.Subttl>
            <S.PopNewCardArea 
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
              placeholder="Введите описание задачи..." 
            />
          </S.PopNewCardForm>

          <S.Subttl>Категория:</S.Subttl>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            {["Web Design", "Research", "Copywriting"].map((t) => (
              <label key={t} style={{ cursor: "pointer", color: newTask.topic === t ? "orange" : "inherit" }}>
                <input 
                  type="radio" 
                  name="topic" 
                  value={t} 
                  onChange={handleInputChange} 
                  style={{ display: "none" }}
                />
                {t}
              </label>
            ))}
          </div>

          <S.Subttl>Даты:</S.Subttl>
          <Calendar selected={selectedDate} setSelect={setSelectedDate} />

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <S.PopNewCardBtnAction onClick={handleFormSubmit}>
            <S.BtnText>Создать задачу</S.BtnText>
          </S.PopNewCardBtnAction>
          
          <button onClick={() => navigate("/")} style={{ marginTop: "10px", background: "none", border: "none", cursor: "pointer" }}>
            Отмена
          </button>
          
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
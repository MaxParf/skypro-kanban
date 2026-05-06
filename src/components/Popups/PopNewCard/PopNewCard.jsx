import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { useTasks } from "../../../context/useTasks";
import { format } from "date-fns";

function PopNewCard() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [newTask, setNewTask] = useState({ title: "", topic: "", description: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const topics = ["Web Design", "Research", "Copywriting"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim() || !newTask.topic || !newTask.description.trim() || !selectedDate) {
      setError("Заполните все поля и выберите категорию");
      return;
    }

    try {
      setIsSubmitting(true);
      const taskData = {
        ...newTask,
        title: newTask.title.trim(),
        description: newTask.description.trim(),
        date: selectedDate.toISOString(),
      };
      await addTask(taskData);
      navigate("/");
    } catch (err) {
      setError(err.message || "Ошибка при создании задачи");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.PopNewCard onClick={() => navigate("/")}>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock onClick={(e) => e.stopPropagation()}>
          <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
          
          <S.PopNewCardWrap>
            <S.PopNewCardForm onSubmit={handleFormSubmit}>
              <S.FormNewBlock>
                <S.Subttl>Название задачи</S.Subttl>
                <S.PopNewCardInput 
                  name="title" 
                  value={newTask.title} 
                  onChange={handleInputChange} 
                  placeholder="Введите название задачи..." 
                />
              </S.FormNewBlock>
              <S.FormNewBlock>
                <S.Subttl>Описание задачи</S.Subttl>
                <S.PopNewCardArea 
                  name="description" 
                  value={newTask.description} 
                  onChange={handleInputChange} 
                  placeholder="Введите описание задачи..." 
                />
              </S.FormNewBlock>
            </S.PopNewCardForm>

            <S.PopNewCardCalendar>
              <S.Subttl>Даты</S.Subttl>
              <Calendar selected={selectedDate} setSelect={setSelectedDate} />
              <S.CalendarPeriodText>
                {!selectedDate ? (
                  "Выберите срок исполнения."
                ) : (
                  <>Срок исполнения: <span>{format(selectedDate, "dd.MM.yy")}</span></>
                )}
              </S.CalendarPeriodText>
            </S.PopNewCardCalendar>
          </S.PopNewCardWrap>

          <S.PopNewCardCategories>
            <S.Subttl>Категория</S.Subttl>
            <S.CategoriesThemes>
              {topics.map((t) => (
                <S.CategoriesTheme 
                  key={t} 
                  $topic={t} 
                  $active={newTask.topic === t} 
                  onClick={() => setNewTask(prev => ({ ...prev, topic: t }))}
                >
                  <p>{t}</p>
                </S.CategoriesTheme>
              ))}
            </S.CategoriesThemes>
          </S.PopNewCardCategories>

          {error && <p style={{ color: "red", fontSize: "12px", marginTop: "10px" }}>{error}</p>}
          
          <S.PopNewCardBtnAction onClick={handleFormSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Создание..." : "Создать задачу"}
          </S.PopNewCardBtnAction>
          
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;

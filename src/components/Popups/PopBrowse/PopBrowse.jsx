import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import { Calendar } from "../../Calendar/Calendar";
import { format } from "date-fns";
import { useTasks } from "../../../context/useTasks";

const getCardDate = (date) => {
  const parsedDate = date ? new Date(date) : new Date();
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
};

function PopBrowse() {
  const { id } = useParams();
  const { cards } = useTasks();

  const currentCard = cards ? cards.find((card) => card._id === id) : null;

  if (!currentCard) return null;

  return (
    <PopBrowseDetails
      key={currentCard._id}
      currentCard={currentCard}
      id={id}
    />
  );
}

function PopBrowseDetails({ currentCard, id }) {
  const navigate = useNavigate();
  const { updateTask, deleteTask } = useTasks();

  const [isEdit, setIsEdit] = useState(false);
  const [selectedDate, setSelectedDate] = useState(getCardDate(currentCard?.date));
  const [actionError, setActionError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [editedTask, setEditedTask] = useState({
    title: currentCard?.title || "",
    description: currentCard?.description || "",
    status: currentCard?.status || "",
    topic: currentCard?.topic || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditCancel = () => {
    if (currentCard) {
      setSelectedDate(getCardDate(currentCard.date));
      setEditedTask({
        title: currentCard.title || "",
        description: currentCard.description || "",
        status: currentCard.status || "",
        topic: currentCard.topic || "",
      });
    }
    setIsEdit(false);
  };

  const handleEditSave = async () => {
    try {
      setIsSaving(true);
      setActionError("");
      await updateTask(id, { ...editedTask, date: selectedDate.toISOString() });
      setIsEdit(false);
    } catch (err) {
      setActionError("Ошибка при сохранении: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteTask = async () => {
    if (window.confirm("Вы уверены, что хотите удалить задачу?")) {
      try {
        setIsDeleting(true);
        setActionError("");
        await deleteTask(id);
        navigate("/");
      } catch (err) {
        setActionError("Ошибка при удалении: " + err.message);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>{isEdit ? editedTask.title : currentCard.title}</S.PopBrowseTtl>
              <S.TopicText $topic={currentCard.topic}>{currentCard.topic}</S.TopicText>
            </S.PopBrowseTopBlock>

            <S.PopBrowseStatus>
              <S.StatusTtl>Статус</S.StatusTtl>
              <S.StatusThemes>
                {isEdit ? (
                  ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((status) => (
                    <S.StatusTheme key={status} $active={editedTask.status === status}>
                      <input 
                        type="radio" 
                        name="status" 
                        value={status} 
                        checked={editedTask.status === status}
                        onChange={handleInputChange} 
                        style={{ display: "none" }}
                      />
                      <p>{status}</p>
                    </S.StatusTheme>
                  ))
                ) : (
                  <S.StatusTheme $active={true}><p>{currentCard.status}</p></S.StatusTheme>
                )}
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <S.StatusTtl>Описание задачи</S.StatusTtl>
                  <S.FormBrowseArea
                    name="description"
                    readOnly={!isEdit}
                    value={isEdit ? editedTask.description : currentCard.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              {/* Календарь справа согласно макету */}
              <S.PopBrowseCalendar>
                <S.StatusTtl>Даты</S.StatusTtl>
                <Calendar 
                  selected={selectedDate} 
                  setSelect={isEdit ? setSelectedDate : () => {}}
                />
                <S.CalendarPeriod>
                  <p>Срок исполнения: <span>{format(selectedDate, "dd.MM.yy")}</span></p>
                </S.CalendarPeriod>
              </S.PopBrowseCalendar>

            </S.PopBrowseWrap>

            {actionError && <S.ActionError>{actionError}</S.ActionError>}

            <S.PopBrowseBtnBlock>
              {isEdit ? (
                <S.BtnGroup>
                  <S.BtnEdit onClick={handleEditSave} disabled={isSaving || isDeleting}>
                    {isSaving ? "Сохранение..." : "Сохранить"}
                  </S.BtnEdit>
                  <S.BtnDelete onClick={handleEditCancel} disabled={isSaving || isDeleting}>Отмена</S.BtnDelete>
                  <S.BtnDelete onClick={handleDeleteTask} disabled={isSaving || isDeleting}>
                    {isDeleting ? "Удаление..." : "Удалить задачу"}
                  </S.BtnDelete>
                </S.BtnGroup>
              ) : (
                <S.BtnGroup>
                  <S.BtnEdit onClick={() => setIsEdit(true)} disabled={isDeleting}>Редактировать задачу</S.BtnEdit>
                  <S.BtnDelete onClick={handleDeleteTask} disabled={isDeleting}>
                    {isDeleting ? "Удаление..." : "Удалить задачу"}
                  </S.BtnDelete>
                </S.BtnGroup>
              )}
              <S.BtnClose onClick={() => navigate("/")} disabled={isSaving || isDeleting}>Закрыть</S.BtnClose>
            </S.PopBrowseBtnBlock>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;

import { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import { deleteTask, editTask } from "../../../api/tasks";
import * as S from "./PopBrowse.styled";

function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cards, fetchTasks } = useOutletContext();

  const currentCard = cards ? cards.find((card) => card._id === id) : null;

  const [isEdit, setIsEdit] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: currentCard?.title || "",
    description: currentCard?.description || "",
    status: currentCard?.status || "",
    topic: currentCard?.topic || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleEditSave = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await editTask({ token: user?.token, id, taskData: editedTask });
      await fetchTasks();
      setIsEdit(false);
    } catch (err) {
      alert("Ошибка при сохранении: " + err.message);
    }
  };

  const handleDeleteTask = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (window.confirm("Вы уверены, что хотите удалить задачу?")) {
      try {
        await deleteTask({ token: user?.token, id });
        await fetchTasks();
        navigate("/");
      } catch (err) {
        alert("Ошибка при удалении: " + err.message);
      }
    }
  };

  if (!currentCard) return null;

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>{isEdit ? editedTask.title : currentCard.title}</S.PopBrowseTtl>
              {/* Категория (Topic) справа как на макете */}
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
              {/* Место для календаря будет здесь */}
            </S.PopBrowseWrap>

            <S.PopBrowseBtnBlock>
              {isEdit ? (
                <S.BtnGroup>
                  <S.BtnEdit onClick={handleEditSave}>Сохранить</S.BtnEdit>
                  <S.BtnDelete onClick={() => setIsEdit(false)}>Отмена</S.BtnDelete>
                  <S.BtnDelete onClick={handleDeleteTask}>Удалить задачу</S.BtnDelete>
                </S.BtnGroup>
              ) : (
                <S.BtnGroup>
                  <S.BtnEdit onClick={() => setIsEdit(true)}>Редактировать задачу</S.BtnEdit>
                  <S.BtnDelete onClick={handleDeleteTask}>Удалить задачу</S.BtnDelete>
                </S.BtnGroup>
              )}
              <S.BtnClose onClick={() => navigate("/")}>Закрыть</S.BtnClose>
            </S.PopBrowseBtnBlock>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
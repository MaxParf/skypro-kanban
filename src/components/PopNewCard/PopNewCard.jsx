import Calendar from "../Calendar/Calendar";

function PopNewCard() {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <h3>Создание задачи</h3>
        <form className="pop-new-card__form">
          <input placeholder="Название задачи" />
          <textarea placeholder="Описание"></textarea>
        </form>
        <Calendar />
        <button>Создать задачу</button>
      </div>
    </div>
  )
}

export default PopNewCard;
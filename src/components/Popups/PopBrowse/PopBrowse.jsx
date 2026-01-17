import Calendar from "../../Calendar/Calendar";

function PopBrowse() {
  return (
    <div className="pop-browse" id="popBrowse">
      <h3>Название задачи</h3>

      <textarea readOnly />

      <Calendar />

      <button>Закрыть</button>
    </div>
  )
}

export default PopBrowse;

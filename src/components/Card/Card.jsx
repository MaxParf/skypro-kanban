export default function Card({ topic, title, date }) {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          {/* Здесь можно добавить логику выбора цвета в зависимости от темы */}
          <div className="card__theme _orange">
            <p className="_orange">{topic}</p>
          </div>
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <div className="card__date">
            <svg>...</svg>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
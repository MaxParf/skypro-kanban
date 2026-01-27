export default function Card({ topic, title, date }) {
  
  // 1. Создаем объект-словарь, где ключу (теме) соответствует нужный CSS-класс
  const themeStyles = {
    "Web Design": "_orange",
    "Research": "_green",
    "Copywriting": "_purple",
  };

  // 2. Определяем класс для текущей карточки. 
  // Если темы нет в списке, подставится стандартный (например, _gray)
  const colorClass = themeStyles[topic] || "_gray";

  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          {/* Здесь можно добавить логику выбора цвета в зависимости от темы */}
          <div className={`card__theme ${colorClass}`}>
            <p className={colorClass}>{topic}</p>
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

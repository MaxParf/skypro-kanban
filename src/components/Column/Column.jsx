import Card from "../Card/Card";

export default function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {/* Итерируем по массиву карточек, который пришел из Main */}
        {cards.map((card) => (
          <Card 
            key={card.id} // Критерий: уникальный ID в key
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
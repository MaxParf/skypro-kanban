import * as S from "./Column.styled";
import Card from "../Card/Card";

export default function Column({ title, cards }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.ColumnCards>
        {/* Итерируем по массиву карточек, который пришел из Main */}
        {cards.map((card) => ( 
          <Card 
            key={card.id} // Критерий: уникальный ID в key
            topic={card.topic} 
            title={card.title} 
            date={card.date} 
          />
        ))}
      </S.ColumnCards>
    </S.MainColumn>
  );
}
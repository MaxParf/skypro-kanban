import * as S from "./Column.styled";
import Card from "../Card/Card";

export default function Column({ title, cards }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.ColumnCards>
        {cards.map((card) => ( 
          <Card 
            key={card.id} 
            id={card.id} // передаем id
            topic={card.topic} 
            title={card.title} 
            date={card.date} 
          />
        ))}
      </S.ColumnCards>
    </S.MainColumn>
  );
}
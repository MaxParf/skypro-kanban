import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";

function PopNewCard() {
  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
          <S.PopNewCardForm>
            <input placeholder="Название задачи" />
            <textarea placeholder="Описание"></textarea>
          </S.PopNewCardForm>
          <Calendar />
          <button>Создать задачу</button>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
import { useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";

function PopNewCard() {
  const navigate = useNavigate();

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
          
          <S.PopNewCardForm>
            <S.PopNewCardInput placeholder="Введите название задачи..." />
            
            <S.Subttl>Описание задачи</S.Subttl>
            <S.PopNewCardArea placeholder="Введите описание задачи..." />
          </S.PopNewCardForm>

          <S.Subttl>Даты:</S.Subttl>
          <Calendar />

          <S.PopNewCardBtnAction onClick={() => navigate("/")}>
            <S.BtnText>Создать задачу</S.BtnText>
          </S.PopNewCardBtnAction>
          
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
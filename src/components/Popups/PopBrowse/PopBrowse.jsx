import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";

function PopBrowse() {
  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>

          <S.PopBrowseArea readOnly placeholder="Описание задачи..." />

          <Calendar />

          <button>Закрыть</button>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
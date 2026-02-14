import { useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";

function PopBrowse() {
  const navigate = useNavigate();

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>

          <S.PopBrowseArea readOnly placeholder="Описание задачи..." />
          
          <S.PopBrowseSubttl>Даты</S.PopBrowseSubttl>
          <Calendar />

          <S.PopBrowseBtnClose onClick={() => navigate("/")}>
            <S.BtnText>Закрыть</S.BtnText>
          </S.PopBrowseBtnClose>
          
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
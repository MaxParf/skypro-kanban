import * as S from "./Card.styled";
import { colors } from "../../theme"; // Импорт палитры
// Импорт Link, для перехода без перезагрузки
import { Link } from "react-router-dom";
import { format } from "date-fns";

const formatCardDate = (date) => {
  const parsedDate = date ? new Date(date) : null;
  return parsedDate && !Number.isNaN(parsedDate.getTime()) ? format(parsedDate, "dd.MM.yy") : "";
};

// Добавляем id в пропсы, теперь какую именно карточку открывать
export default function Card({ topic, title, date, id }) {
  
  // 1. Создаем объект-словарь, где ключу (теме) соответствует объект с цветами из theme.js
  const themeStyles = {
    "Web Design": colors.topicOrange,
    "Research": colors.topicGreen,
    "Copywriting": colors.topicPurple,
  };

  // 2. Определяем набор цветов для текущей карточки. 
  // Если темы нет в списке, подставится стандартный (gray)
  const currentColor = themeStyles[topic] || colors.topicGray;
  const formattedDate = formatCardDate(date);

  return (
    <S.CardItem>
      {/* Обернули содержимое в Link. 
          При клике на карточку URL изменится на id карты */}
      <Link to={`/card/${id}`}>
        {/* GEMINI: Добавляем as="div", чтобы избежать вложенных <a>, 
            если CardWrapper изначально был ссылкой в стилях */}
        <S.CardWrapper as="div">
          <S.CardGroup>
            {/* Передаем объект с цветами в пропс $colorObj */}
            <S.CardTheme $colorObj={currentColor}>
              <p>{topic}</p>
            </S.CardTheme>
          </S.CardGroup>
          <S.CardContent>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardDate>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 11.5C9.26142 11.5 11.5 9.26142 11.5 6.5C11.5 3.73858 9.26142 1.5 6.5 1.5C3.73858 1.5 1.5 3.73858 1.5 6.5C1.5 9.26142 3.73858 11.5 6.5 11.5Z"
                  stroke="#94A6BE"
                />
                <path
                  d="M6.5 3.5V6.5L8 8"
                  stroke="#94A6BE"
                  strokeLinecap="round"
                />
              </svg>
              <p>{formattedDate}</p>
            </S.CardDate>
          </S.CardContent>
        </S.CardWrapper>
      </Link>
    </S.CardItem>
  );
}

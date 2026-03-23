import ReactCalendar from "react-calendar";
import * as S from "./Calendar.styled";

export function Calendar({ selected, setSelect }) {
  return (
    <S.CalendarBlock>
      <ReactCalendar
        onChange={setSelect}
        value={selected}
        locale="ru-RU"
        prev2Label={null}
        next2Label={null}
        prevLabel="<"
        nextLabel=">"
        formatMonthYear={(locale, date) => {
          const month = date.toLocaleString(locale, { month: 'long' });
          const year = date.getFullYear();
          return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
        }}
      />
    </S.CalendarBlock>
  );
}

export default Calendar;
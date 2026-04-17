import styled from "styled-components";

export const CalendarBlock = styled.div`
  width: 100%;

  .react-calendar {
    width: 182px;
    border: none;
    font-family: "Roboto", sans-serif;
    background: transparent;
    display: flex;
    flex-direction: column;
  }

  /* Навигация: Март 2026   < > */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 16px;
    margin-bottom: 12px;
    gap: 16px;
  }

  /* Название месяца */
  .react-calendar__navigation__label {
    background: none;
    border: none;
    font-weight: 600;
    font-size: 14px;
    color: #94A6BE;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    text-align: left;
    order: 1;
    pointer-events: none;
  }

  /* Стили для кнопок стрелок */
  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    background: none;
    border: none;
    width: 10px;
    height: 10px;
    color: transparent;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    opacity: 1;
  }

  /* Кнопка "Назад" (<) */
  .react-calendar__navigation__prev-button {
    order: 2; /* Второе место */
  }

  /* Кнопка "Вперед" (>) */
  .react-calendar__navigation__next-button {
    order: 3;
  }

  .react-calendar__navigation__prev-button::after,
  .react-calendar__navigation__next-button::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-left: 1.5px solid #94A6BE;
    border-bottom: 1.5px solid #94A6BE;
    transition: all 0.2s ease;
  }

  .react-calendar__navigation__prev-button::after {
    transform: rotate(45deg);
  }

  .react-calendar__navigation__next-button::after {
    transform: rotate(-135deg);
  }

  .react-calendar__navigation__prev-button:hover::after,
  .react-calendar__navigation__next-button:hover::after {
    border-color: #94A6BE;
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none !important;
  }

  /* Стили для дней недели и чисел */
  .react-calendar__month-view__weekdays {
    text-transform: lowercase;
    font-size: 10px;
    color: #94A6BE;
    abbr { text-decoration: none; }
  }

  .react-calendar__tile {
    height: 22px;
    font-size: 10px;
    color: #94A6BE;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:enabled:hover {
      background: #EAEEF6;
      border-radius: 50%;
      color: #94A6BE;

      abbr {
        font-weight: 400;
        color: #94A6BE;
      }
    }
  }

  .react-calendar__tile--now:not(.react-calendar__tile--active) {
    background: none;

    abbr {
      font-weight: 700;
      color: #94A6BE;
    }
  }

  .react-calendar__tile--active {
    background: #94A6BE !important;
    border-radius: 50%;

    abbr {
      font-weight: 400;
      color: #fff;
    }
  }

  .react-calendar__tile--active:enabled:hover {
    background: #94A6BE !important;

    abbr {
      color: #fff;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0;
  }
`;

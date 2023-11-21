import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isEqual,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";

const VisibleDates = ({ onChange, visibleMonth, value, startWeekSunday }) => {
  const weekStart = { weekStartsOn: startWeekSunday ? 0 : 1 };
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth), weekStart),
    end: endOfWeek(endOfMonth(visibleMonth), weekStart),
  });

  return (
    <div className="date-picker-grid-dates date-picker-grid">
      {visibleDates.map((date) => {
        return (
          <button
            key={date.toDateString()}
            onClick={() => onChange(date)}
            className={`date 
              ${
                !isSameMonth(date, visibleMonth) &&
                "date-picker-other-month-date"
              }
              ${isEqual(date, value) && "selected"} 
              ${isToday(date) && "today"} `}
          >
            {date.getDate()}
          </button>
        );
      })}
    </div>
  );
};

export default VisibleDates;

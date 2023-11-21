import { format } from "date-fns";
import { useState } from "react";
import WeekDays from "./WeekDays";
import VisibleMonth from "./VisibleMonth";
import VisibleDates from "./VisibleDates";

const DatePicker = ({ onChange, value, startWeekSunday = false }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const setDate = (date) => {
    onChange(date);
    setShowCalendar(false);
  };

  return (
    <div className="date-picker-container">
      <button
        className="date-picker-button"
        onClick={() => setShowCalendar((show) => !show)}
      >
        {!value ? "Select Date" : format(value, "MMM do, yyyy")}
      </button>
      {showCalendar && (
        <DatePickerModal
          onChange={setDate}
          value={value}
          startWeekSunday={startWeekSunday}
        />
      )}
    </div>
  );
};
export default DatePicker;
function DatePickerModal({ onChange, value, startWeekSunday }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date());

  return (
    <div className="date-picker">
      <VisibleMonth visibleMonth={visibleMonth} onChange={setVisibleMonth} />
      <WeekDays startWeekSunday={startWeekSunday} />
      <VisibleDates
        startWeekSunday={startWeekSunday}
        onChange={onChange}
        visibleMonth={visibleMonth}
        value={value}
      />
    </div>
  );
}

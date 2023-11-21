import { useMemo } from "react";

const WeekDays = ({ startWeekSunday }) => {
  const weekDays = useMemo(() => {
    const _weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    if (startWeekSunday) {
      const lastItem = _weekDays.pop(); // Remove the last item
      _weekDays.unshift(lastItem); // Add it to the beginning
    }

    return _weekDays;
  }, [startWeekSunday]);

  return (
    <div className="date-picker-grid-weekdays date-picker-grid">
      {weekDays.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};

export default WeekDays;

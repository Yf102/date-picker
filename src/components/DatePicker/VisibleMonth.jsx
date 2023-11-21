import { addMonths, format } from "date-fns";

const VisibleMonth = ({ visibleMonth, onChange }) => {
  const handleMonthChange = (offset) =>
    onChange(addMonths(visibleMonth, offset));

  return (
    <div className="date-picker-header">
      <button
        className="prev-month-button month-button"
        onClick={() => handleMonthChange(-1)}
      >
        &larr;
      </button>
      <div className="current-month">{format(visibleMonth, "MMMM - yyyy")}</div>
      <button
        className="next-month-button month-button"
        onClick={() => handleMonthChange(1)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default VisibleMonth;

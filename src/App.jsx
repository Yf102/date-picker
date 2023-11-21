import { useState } from "react";
import DatePicker from "./components/DatePicker";

function App() {
  const [date, setDate] = useState();

  return <DatePicker onChange={setDate} value={date} startWeekSunday={false} />;
}

export default App;

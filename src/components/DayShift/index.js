import { useEffect, useState } from "react";
import { handleForecast } from "../../utils";
import DayShiftItem from "../DayShiftItem";

import "./styles.scss";

const DayShift = ({ forecast }) => {
  const [shift, setShift] = useState([]);

  useEffect(() => {
    const shifts = handleForecast(forecast);
    setShift(shifts);
  }, [forecast]);

  return (
    <div className="item-wrapper">
      {shift ? (
        <>
          <DayShiftItem shiftInfo={shift} />
        </>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default DayShift;

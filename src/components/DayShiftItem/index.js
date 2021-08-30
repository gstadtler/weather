import { convertToStringAndSplitsIt } from "../../utils";

const DayShiftItem = ({ shiftInfo }) => {
  const periodOf24h = shiftInfo.slice(0, 4);
  return (
    <>
      {periodOf24h.map((shift) => (
        <div key={shift.data.dt}>
          <h4>{shift.name}</h4>
          <img
            src={`https://openweathermap.org/img/wn/${shift.data.weather[0].icon}@2x.png`}
            alt={shift.data.weather.description}
            width={75}
            height={75}
          />
          <h4>
            {convertToStringAndSplitsIt(shift.data.temp, ".")[0]}
            &deg;C
          </h4>
        </div>
      ))}
    </>
  );
};

export default DayShiftItem;

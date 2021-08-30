import {
  convertDateToTimeString,
  convertToStringAndSliceIt,
  convertToStringAndSplitsIt,
} from "../../utils";

const ExtraInfo = ({ title, value, unit }) => {
  return (
    <>
      <div>
        <h5>{title}</h5>
        {title.includes("sun") ? (
          <p>
            {convertToStringAndSliceIt(convertDateToTimeString(value), 5)}
            {convertToStringAndSplitsIt(convertDateToTimeString(value), " ")[1]}
          </p>
        ) : (
          <p>
            {value}
            {unit}
          </p>
        )}
      </div>
    </>
  );
};

export default ExtraInfo;

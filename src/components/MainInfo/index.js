import { convertToStringAndSplitsIt, setClimateSituation } from "../../utils";

import { CgArrowLongUp, CgArrowLongDown } from "react-icons/cg";

import "./styles.scss";

const MainInfo = ({ title, climateCode, temp, tempMax, tempMin, icon }) => {
  return (
    <div className="main-info">
      <h1>{title.toUpperCase()}</h1>
      <h4>{setClimateSituation(climateCode)}</h4>
      <div className="temp-wrapper">
        <h4>{convertToStringAndSplitsIt(temp, ".")[0]}</h4>
        <div className="aside-info">
          <h5>&deg;C</h5>
          <p>
            <CgArrowLongUp />
            {convertToStringAndSplitsIt(tempMax, ".")[0]}&deg;
          </p>
          <p>
            <CgArrowLongDown />
            {convertToStringAndSplitsIt(tempMin, ".")[0]}&deg;
          </p>
        </div>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`open weather icon ${icon}`}
        width={100}
        height={100}
      />
    </div>
  );
};

export default MainInfo;

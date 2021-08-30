import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import { FiArrowLeft } from "react-icons/fi";
import {
  fetchCityClimateInfo,
  fetchForecastClimateInfo,
} from "../../services/weatherApi";

import DayShift from "../DayShift";
import ExtraInfo from "../ExtraInfo";
import MainInfo from "../MainInfo";
import Theme from "../Theme";
import "./styles.scss";

const CityClimateInfo = (props) => {
  const [loading, setLoading] = useState(true);
  const [climateInfo, setClimateInfo] = useState();
  const [coordinates, setCoordinates] = useState({});
  const [forecast, setForecast] = useState([]);

  const coordRef = useRef(false);
  const city = props.match.params.city;

  const loaderCss = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    fetchCityClimateInfo(city).then((data) => {
      setClimateInfo(data);
      setCoordinates(data.coord);
      coordRef.current = true;
      setLoading(false);
    });
  }, [city]);

  useEffect(() => {
    if (coordRef.current) {
      fetchForecastClimateInfo(coordinates).then((data) => {
        setForecast(data.hourly.slice(0, 28));
      });
    }
  }, [coordinates]);

  return (
    <>
      {climateInfo ? (
        <Theme climateCode={climateInfo.weather[0].id}>
          <div className="link-to-home">
            <Link className="link" to="/">
              <FiArrowLeft size={28} />
            </Link>
          </div>
          <div className="info-container">
            <MainInfo
              title={climateInfo.name}
              climateCode={climateInfo.weather[0].id}
              temp={climateInfo.main.temp}
              tempMax={climateInfo.main.temp_max}
              tempMin={climateInfo.main.temp_min}
              icon={climateInfo.weather[0].icon}
            />
            <DayShift forecast={forecast} />
            <div className="extraInfo-wrapper">
              <ExtraInfo
                title={"wind speed"}
                value={climateInfo.wind.speed}
                unit={" m/s"}
              />
              <ExtraInfo
                title={"sunrise"}
                value={climateInfo.sys.sunrise}
                unit={""}
              />
              <ExtraInfo
                title={"sunset"}
                value={climateInfo.sys.sunset}
                unit={""}
              />
              <ExtraInfo
                title={"humidity"}
                value={climateInfo.main.humidity}
                unit={"%"}
              />
            </div>
          </div>
        </Theme>
      ) : (
        <div className="loading">
          <PulseLoader
            loading={loading}
            css={loaderCss}
            size={30}
            speedMultiplier={2}
          />
          ;
        </div>
      )}
    </>
  );
};

export default CityClimateInfo;

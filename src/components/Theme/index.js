import { useEffect, useState } from "react";
import { setClimateSituation } from "../../utils";

import "./styles.scss";

const Theme = ({ climateCode, children }) => {
  const [rainyClimate, setRainyClimate] = useState(false);
  const [snowyClimate, setSnowyClimate] = useState(false);
  const [sunnyClimate, setSunnyClimate] = useState(false);

  useEffect(() => {
    const situation = setClimateSituation(climateCode);
    switch (situation) {
      case "rainy":
        setRainyClimate(true);
        break;
      case "snowy":
        setSnowyClimate(true);
        break;
      case "sunny":
        setSunnyClimate(true);
        break;
      default:
        break;
    }
  }, [climateCode]);

  return (
    <>
      {rainyClimate && <div className="rainy-theme">{children}</div>}
      {snowyClimate && <div className="snowy-theme">{children}</div>}
      {sunnyClimate && <div className="sunny-theme">{children}</div>}
    </>
  );
};

export default Theme;

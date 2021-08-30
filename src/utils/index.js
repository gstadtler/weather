export const convertDateToTimeString = (date) => {
  return new Date(date * 1000).toLocaleTimeString("en-US");
};

export const setDayShiftsInfo = (timeString, data) => {
  const is3am = "3:00:00 AM";
  const is9am = "9:00:00 AM";
  const is3pm = "3:00:00 PM";
  const is9pm = "9:00:00 PM";

  const dayShiftsInfo = [];

  switch (timeString) {
    case is3am:
      return { name: "dawn", data: data, sortId: 1 };
    case is9am:
      return { name: "morning", data: data, sortId: 2 };
    case is3pm:
      return { name: "afternoon", data: data, sortId: 3 };
    case is9pm:
      return { name: "night", data: data, sortId: 4 };
    default:
      break;
  }
  return dayShiftsInfo;
};

export const handleForecast = (forecast) => {
  const forecastWithShift = [];
  forecast.forEach((hour) => {
    const result = setDayShiftsInfo(convertDateToTimeString(hour.dt), hour);
    if (result.data) {
      const index = forecastWithShift.findIndex((element) => {
        return element.name === result.name;
      });
      if (index < 0) {
        forecastWithShift.push(result);
      }
    }
  });
  const sortedForecastWithShift = forecastWithShift.sort((a, b) => {
    if (a.sortId > b.sortId) {
      return 1;
    }
    if (a.sortId < b.sortId) {
      return -1;
    }
    return 0;
  });
  return sortedForecastWithShift;
};

export const setClimateSituation = (climateCode) => {
  const rainyCode = "5";
  const snowyCode = "6";
  const sunnyCode = "8";
  if (climateCode.toString().includes(rainyCode, 0)) {
    return "rainy";
  } else if (climateCode.toString().includes(snowyCode, 0)) {
    return "snowy";
  } else if (climateCode.toString().includes(sunnyCode, 0)) {
    return "sunny";
  }
};

export const convertToStringAndSliceIt = (value, limit) => {
  return value.toString().slice(0, limit);
};

export const convertToStringAndSplitsIt = (value, separator) => {
  const splitsArray = value.toString().split(separator);
  return splitsArray;
};

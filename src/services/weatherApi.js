import api from "./api";

export const fetchCityClimateInfo = async (city) => {
  const { data } = await api.get("/weather", {
    params: {
      q: city,
      units: "metric",
    },
  });

  return data;
};

export const fetchForecastClimateInfo = async (coords) => {
  const excludeInfo = "current,minutely,daily,alerts";
  const { data } = await api.get("/onecall", {
    params: {
      lat: coords.lat,
      lon: coords.lon,
      exclude: excludeInfo,
      units: "metric",
    },
  });
  return data;
};

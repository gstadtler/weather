import { fetchCityClimateInfo } from "../weatherApi";

test("should return an object", async () => {
  const city = "recife";
  const result = await fetchCityClimateInfo(city);
  expect(typeof result).toBe("object");
});

test("should have weather, sys and main properties", async () => {
  const city = "recife";
  const result = await fetchCityClimateInfo(city);
  expect(result).toHaveProperty("weather");
  expect(result).toHaveProperty("sys");
  expect(result).toHaveProperty("main");
});

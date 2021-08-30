import {
  convertDateToTimeString,
  convertToStringAndSliceIt,
  convertToStringAndSplitsIt,
  handleForecast,
  setClimateSituation,
  setDayShiftsInfo,
} from "../index";

const MockObject = () => {
  return { name: "morning", data: { temp: 233.5, temp_min: 199.3 } };
};

describe("convertDateToTimeString helper function", () => {
  test("should return a string", () => {
    const date = 30082021;
    expect(typeof convertDateToTimeString(date)).toBe("string");
  });

  test("mentions the period 'AM' of the day", () => {
    const date = 30082021;
    const am = "AM";
    const convertedDate = convertDateToTimeString(date);
    expect(convertedDate).toMatch(am);
  });

  test("mentions the period 'PM' of the day", () => {
    const date = 21082021;
    const pm = "PM";
    const convertedDate = convertDateToTimeString(date);
    expect(convertedDate).toMatch(pm);
  });
});

describe("setDayShiftsInfo helper function", () => {
  test("should return an object", () => {
    const date = 30082021;
    const result = setDayShiftsInfo(convertDateToTimeString(date), MockObject);
    expect(typeof result).toBe("object");
  });
});

describe("handleForecast helper function", () => {
  test("should return an object", () => {
    const mockArray = [
      { name: "random name", title: "random title", value: "random value" },
    ];
    const result = handleForecast(mockArray);
    expect(typeof result).toBe("object");
  });
});

describe("setClimateSituation helper function", () => {
  test("should return a string", () => {
    const idCode = 8;
    expect(typeof setClimateSituation(idCode)).toBe("string");
  });
});

describe("convertToStringAndSliceIt helper function", () => {
  test("should convert a value to a string and return a sliced string", () => {
    const value = 2021;
    expect(typeof convertToStringAndSliceIt(value, 2)).toBe("string");
    expect(convertToStringAndSliceIt(value, 2)).toBe("20");
  });
});

describe("convertToStringAndSplitsIt helper function", () => {
  test("should convert a value to a string, split it and return an object array", () => {
    const value = 20.21;
    expect(typeof convertToStringAndSplitsIt(value, ".")).toBe("object");
    expect(convertToStringAndSplitsIt(value, ".")[1]).toBe("21");
  });
});

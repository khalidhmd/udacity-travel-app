import { callAPI } from "../src/client/js/app";

test("should fetch data from API", async () => {
  const data = await callAPI("london", "2020-01-20");
  expect(data.name).toBe("London");
  expect(data.countryName).toBe("United Kingdom");
  expect(data.temperatureHigh).toBeDefined();
  expect(data.temperatureLow).toBeDefined();
  expect(data.cloudCover).toBeDefined();
  expect(data.imgURL).toBeDefined();
});

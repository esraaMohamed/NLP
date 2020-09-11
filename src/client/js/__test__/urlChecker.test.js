import { checkValidUrl } from "../urlChecker";

describe("Testing the check url validation functionality", () => {
  test("Testing the checkValidUrl() returns false for invalid url", () => {
    const url = ''
    expect(checkValidUrl).toBeDefined();
    expect(checkValidUrl(url)).toEqual(false)
  });
  test("Testing that checkValidUrl() return true with valid url", () => {
    const url = 'https://valid.com'
    expect(checkValidUrl).toBeDefined();
    expect(checkValidUrl(url)).toEqual(true)
  });
});

console.log("actualt.test.ts loaded");

import { hi, greet } from "./actual";

jest.mock("./actual", () => {
  console.log("mocking actual.ts");
  return {
    ...jest.requireActual("./actual"),
    hi: jest.fn(),
  };
});

const mockedHi = jest.mocked(hi);

describe("actual", () => {
  test("works", () => {
    expect(hi()).toBeUndefined();
    expect(mockedHi).toHaveBeenCalled();
    expect(greet()).toBe("greet");
  });
});

import * as sumModule from "./sum";
import { useSum } from "./useSum";

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("sum module", () => {
  test("works", () => {
    expect(sumModule.sum(1, 2)).toBe(3);

    jest.spyOn(sumModule, "sum").mockImplementation(() => 5);
    expect(sumModule.sum(1, 2)).toBe(5);
    expect(sumModule.sum).toHaveBeenCalledTimes(1);

    expect(sumModule.sayHello()).toBe("Hello!");
  });
});

describe("useSum module", () => {
  test("works", () => {
    expect(useSum(1, 2)).toBe(3);

    jest.spyOn(sumModule, "sum").mockImplementation(() => 5);
    expect(useSum(1, 2)).toBe(5);
    expect(sumModule.sum).toHaveBeenCalledTimes(1);
  });
});

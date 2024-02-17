import { sum } from "./sum";
import { useSum } from "./useSum";

jest.mock("../src/sum");

describe("sum module", () => {
  const mockSum = jest.mocked(sum);
  test("works", () => {
    mockSum.mockReturnValue(5);
    expect(mockSum(1, 2)).toBe(5);
  });
});

describe("useSum module", () => {
  test("works", () => {
    const mockSum = jest.mocked(sum);
    mockSum.mockReturnValue(30);
    expect(useSum(1, 2)).toBe(30);
  });
});

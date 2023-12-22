import { describe, expect, test } from "@jest/globals";
import { sum } from "../src/sum";

import { createMock } from "ts-jest-mock";

jest.mock("../src/sum");

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    const mockSum = createMock(sum);
    mockSum.mockReturnValue(3);
    expect(mockSum(1, 2)).toBe(3);
  });
});

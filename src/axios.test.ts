import { isCancel } from "axios";

jest.mock("axios");

jest.mocked(isCancel).mockReturnValue(true);

it("should cancel request", () => {
  expect(isCancel({})).toBe(true);
});

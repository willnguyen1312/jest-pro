import User, { sum } from "./sum";
import { useSum } from "./useSum";

jest.mock("./sum");

describe("sum module", () => {
  test("works", () => {
    jest.mocked(sum).mockReturnValue(5);
    expect(sum(1, 2)).toBe(5);
  });
});

describe("useSum module", () => {
  test("works", () => {
    jest.mocked(sum).mockReturnValue(30);
    expect(useSum(1, 2)).toBe(30);
  });
});

it("should work again", () => {
  jest.spyOn(User.prototype, "getName").mockReturnValue("Mocked");

  const user = new User("Nam");
  expect(user.getName()).toBe("Mocked");
});

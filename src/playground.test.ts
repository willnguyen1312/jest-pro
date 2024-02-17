const obj = {
  hi() {
    return "hi";
  },
};

it("work like a charm", () => {
  jest.spyOn(obj, "hi").mockReturnValue("ed hi");

  expect(obj.hi()).toBe("ed hi");

  jest.restoreAllMocks();

  expect(obj.hi()).toBe("hi");
});

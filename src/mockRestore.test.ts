const obj = {
  func: () => "original",
};

test("func", () => {
  const mock = jest.spyOn(obj, "func");
  mock.mockReturnValue("mocked");

  expect(obj.func()).toBe("mocked");

  mock.mockRestore();
  expect(obj.func()).toBe("original");
});

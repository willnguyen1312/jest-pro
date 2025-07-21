const obj = {
  getName: () => {
    return "Nam";
  },
};

describe("spy", () => {
  it("should work", () => {
    const spy = jest.spyOn(obj, "getName");
    const result = obj.getName();
    expect(obj.getName()).toBe("Nam");
    expect(spy).toHaveBeenCalledTimes(2);

    expect(result).toBe("Nam");
  });
});

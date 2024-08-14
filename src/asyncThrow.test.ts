async function throwStuff() {
  throw new Error("This is an error");
}

it("should throw an error", async () => {
  await expect(throwStuff()).rejects.toThrow(new Error("This is an error"));
  await expect(throwStuff()).rejects.toEqual(new Error("This is an error"));
});

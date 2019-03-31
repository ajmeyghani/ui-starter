import * as index from "index";

describe("hello should", () => {
  it("be defined", () => expect(index.hello).toBeDefined());
  it("return a string", () => expect(typeof index.hello()).toBe("string"));
});

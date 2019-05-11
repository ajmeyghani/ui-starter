import * as value from "./value";

describe("`isNill` should:", () => {
  it("return true if input is not given.`", () => {
    expect(value.isNil()).toBe(true);
  });

  it("return true if input is value `undefined`.", () => {
    expect(value.isNil(void 0)).toBe(true);
  });

  it("return true if input is of type value.nil", () => {
    expect(value.isNil(value.nil)).toBe(true);
  });

  it("return false if input is `null`.", () => {
    expect(value.isNil(null)).toBe(false);
  });
});

describe("`isString` should:", () => {
  it("return true if input arg is a string", () => {
    expect(value.isString("boo")).toBe(true);
  });

  it("return true if input arg is a string.", () => {
    expect(value.isString("")).toBe(true);
  });

  it("return false if input arg is not a string", () => {
    expect(value.isString({})).toBe(false);
  });
});

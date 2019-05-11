/*
 * Defining `nil` to be consistent in terms of "ground" values
 * `undefined` or `null` by just sticking with `undefined`.
 */
const nil = void 0;

/*
 * `isNil` checks if a value is `undefined`.
 */
const isNil = v => v === void 0;

/*
 * `isString` checks if a value is string.
 */
const isString = v => typeof v === "string";

export {nil, isNil, isString};

import * as value from "lib/value/vsalue";

const hello = () => "hello";

const isStr = value.isString("hello world");

console.log(value.isNil(void 0), "ok");

export {
  hello,
};

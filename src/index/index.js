import * as value from "lib/value/value";
import React from "react";
import ReactDom from "react-dom";

const getVal = () => value.isNil("1");

const App = () => (<div>app ...</div>);

ReactDom.render(<App />, document.querySelector("#app"));

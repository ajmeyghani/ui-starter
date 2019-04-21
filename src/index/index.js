import React from "react";
import ReactDom from "react-dom";
import App from "app/app";
import Toaster from "aj-toaster";

ReactDOM.render(
<Toaster theme="mytheme">
  <App />
</Toaster>, document.querySelector("#app"));

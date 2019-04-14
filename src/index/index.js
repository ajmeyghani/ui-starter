import React from "react";
import ReactDom from "react-dom";
import App from "app/app";
import Toaster from "aj-toaster";

ReactDom.render(
<Toaster>
  <App />
</Toaster>, document.querySelector("#app"));

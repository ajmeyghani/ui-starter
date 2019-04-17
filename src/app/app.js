import React from "react";
import {useToaster} from "aj-toaster";
import "app/app.css";

function App() {
  const toaster = useToaster();
  const handleAdd = () => {
    toaster.success("Post was created!");
  };
  return (<div>
    <p>total: {toaster.toasts.length}</p>
    <button onClick={handleAdd}>Add</button>
  </div>);
}

export default App;

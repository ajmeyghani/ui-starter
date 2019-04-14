import React from "React";
import {useToaster} from "aj-toaster";
// import {useToaster} from "aj-toaster/src/toaster/toaster";
import "app/app.css";


function App() {
  const toaster = useToaster();
  const handleAdd = () => {
    toaster.add("message 1");
  };
  return (<div>
    <p>total: {toaster.toasts.length}</p>
    <button onClick={handleAdd}>Add</button>
  </div>);
}

export default App;

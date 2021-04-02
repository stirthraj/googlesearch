import { useState } from "react";
import Search from "./components/Search";


function App() {
  const [c,setC]=useState("");

  return (
    <>
      <div className="main" style={{backgroundColor:c}}>
        <Search colorFunction={(color) => setC(color)} />
      </div>
    </>
  );
}

export default App;

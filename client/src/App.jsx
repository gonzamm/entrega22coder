import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [colors, setColors] = useState([]);

  useEffect(async ()=>{
    const url = `http://localhost:8080/`;
    const response = await fetch(url);
    const result = await response.json();
    setColors(result)
  },[colors])

  return (
    <div className="App">
      <Form />
      <List colors={colors} />
    </div>
  );
}

export default App;

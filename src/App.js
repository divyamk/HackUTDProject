import './App.css';
import { JsonToTable } from "react-json-to-table";
import { stockData } from "./data";

function App() {
  return (
    
    <div className="App">
      <JsonToTable json={stockData}/>
    </div>
  );
}

export default App;

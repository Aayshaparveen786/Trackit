import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import MainFram from "./routers";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainFram />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;

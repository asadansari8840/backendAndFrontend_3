import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewCard from "./components/NewCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<NewCard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

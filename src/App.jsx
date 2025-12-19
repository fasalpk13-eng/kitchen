import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import First from "./Components/First";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/menu" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

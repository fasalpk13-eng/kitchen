import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import First from "./component/first";

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

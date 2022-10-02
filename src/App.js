import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
/* import Home from "./Components/Home/Home";
import Rice from "./Components/Rice/Rice";
import { Link } from "react-router-dom"; */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {/*       <Route index element={<Home />} /> */}
            {/* <Route path="/rice" element={<Rice />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

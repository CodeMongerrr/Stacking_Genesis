import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ClientPortal from "./components/Client/ClientPortal";
import ClientLogin from "./components/ClientLogin/ClientLogin";

const App = () => (
  <Router>
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<ClientPortal />} />
        <Route path="/login" element={<ClientLogin />} />
      </Routes>
    </div>
  </Router>
);

export default App;

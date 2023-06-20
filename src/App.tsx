import React from 'react';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<PrivacyPolicy />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './composents/Home';
import Trad from './composents/Trad';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/traduction">Traduction</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traduction" element={<Trad />} />
      </Routes>
    </div>
  );
}

export default App;

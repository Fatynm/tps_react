import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TP6 from './App';
import TP5 from './App3';
import './Entre.css';
import TP1 from './Teste';
import TP3 from './ex4';
import TP7 from './ex5';
import TP2 from './profile';
import TP4 from './suite_ex4';

const Entre = () => {
  return (
    <Router>
      <div>
        <nav className='menu-container'>
          <button>
            <Link to="/tp1">TP1</Link>
          </button>
          <button>
          <Link to="/tp2">TP2</Link>
          </button>
          <button>
            <Link to="/tp3">TP3</Link>
          </button>
          <button>
            <Link to="/tp4">TP4</Link>
          </button>
          <button>
            <Link to="/tp5">TP5</Link>
          </button>
          <button>
            <Link to="/tp6">TP6</Link>
          </button>
          <button>
            <Link to="/tp7">TP7</Link>
          </button>
          </nav>
        <hr />
        
        <Routes>
          <Route path="/tp1" element={<TP1 />} />
          <Route path="/tp2" element={<TP2 />} />
          <Route path="/tp3" element={<TP3 />} />
          <Route path="/tp4" element={<TP4 />} />
          <Route path="/tp5" element={<TP5 />} />
          <Route path="/tp6" element={<TP6 />} />
          <Route path="/tp7" element={<TP7 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Entre;

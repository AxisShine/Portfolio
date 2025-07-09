import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Art from './pages/Art';
import Music from './pages/Music';
import Coding from './pages/Coding';
import Sailing from './pages/Sailing';
import Other from './pages/Other';
import React from 'react';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/music" element={<Music />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/sailing" element={<Sailing />} />
        <Route path="/sailing" element={<Other />} />
      </Routes>
    </Router>
  );
}


export default App;

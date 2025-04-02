import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CompulsaoFinanceira from './components/CompulsaoFinanceira';
import ProgramacaoFinanceira from './components/ProgramacaoFinanceira';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compulsao" element={<CompulsaoFinanceira />} />
        <Route path="/programacao" element={<ProgramacaoFinanceira />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Likepage from './pages/Likepage';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/Coup de pouce" element={<Likepage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
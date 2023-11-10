import { default as React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './styles/index.scss';
import { LikePage } from './pages/Likepage';
import { getFavouritesRoute } from './routing/getFavouritesRoute';
import { getContactRoute } from './routing/getContactRoute';
import { Contact } from './pages/Contact';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
   
      <Route path="/*" element={<Home />} />
      <Route path ={getFavouritesRoute()} element={<LikePage />} />
      <Route path={getContactRoute()} element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
};

export { App };
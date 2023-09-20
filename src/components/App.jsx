import React from 'react';
import Header from './Header';
import '../styles/App.css';
import Collage from "./Collage";
import  Footer  from './Footer';

function App() {
  return (
    <>
      <Header />
      <Collage/>
      <Footer/>
    </>
  );
}

export default App;




/* import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Careers from './Careers';
import Events from './Events';
import Products from './Products';
import Support from './Support';
import '../styles/App.css';

function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
      <Route path='about' element={<About />} />
      <Route path='careers' element={<Careers />} />
      <Route path='events' element={<Events />} />
      <Route path='products' element={<Products />} />
      <Route path='support' element={<Support />} />
    </Routes>
  );
}

export default App; */
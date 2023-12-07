import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className='flex flex-row shadow bg-black'>
        <Link to="/" className='p-2 text-white hover:bg-red-700'>Product Catalog</Link>
        <Link to="/detail" className='p-2  text-white  hover:bg-red-700'>Product Detail</Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductCatalog />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

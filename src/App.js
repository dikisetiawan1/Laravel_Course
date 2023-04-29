import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCatalog from './pages/productCatalog';
import ProductDetail from './pages/productDetail';


function App() {
  return (
   <>
<Router>
  <Routes>
    <Route exact path='/' element={<ProductCatalog/>}/>
    <Route exact path='/detail' element={<ProductDetail/>}/>
  </Routes>
</Router>
   
   
   </>
  );
}

export default App;

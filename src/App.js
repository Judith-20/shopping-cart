//import './App.css';
import React from 'react';
import { ProductItemList } from './components/ProductList';
import { Cart } from './components/Cart';
import { CartProvider } from './context/GlobalContext';
import './components/main.css'

function App() {
return (
  <CartProvider>
  <div className="App">
    <h1>PRODUCTS LIST</h1>

     {/*Render the ProductItemList and Cart Component */}
    <ProductItemList/>
     {/* <hr/> */}

    <Cart/>
    
  </div>
  </CartProvider>
  );
}
// cart provider can either be called in the App.js or index.js
export default App;

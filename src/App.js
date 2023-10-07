
// Source Code : https://github.com/dmalvia/React_Redux_Tutorial

// Youtube : https://www.youtube.com/watch?v=0W6i5LYKCSI


import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './containers/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product/:productId' exact element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

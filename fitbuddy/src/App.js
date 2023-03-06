import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Analytics from "./Pages/Analytics";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import BMICal from "./Pages/Comment";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bmi-calculator" element={<BMICal/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/profile" element={<ProductList/>}/>
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;

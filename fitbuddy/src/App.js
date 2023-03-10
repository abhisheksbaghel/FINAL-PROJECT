import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Analytics from "./Pages/Analytics";
import Product from "./Pages/Product";
import BMICal from "./Pages/Comment";
import ExerciseDetail from "./Pages/ExerciseDetail";
import LoginDemo2 from "./Pages/LoginDemo2";
import Diet from "./Pages/Diet";
import Profile from "./Pages/Profile";

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
        <Route path="/signup" element={<LoginDemo2/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;

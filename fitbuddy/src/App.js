  import React,{useEffect} from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Product from "./Pages/Product";
import BMICal from "./Pages/Comment";
import ExerciseDetail from "./Pages/ExerciseDetail";
import LoginDemo2 from "./Pages/LoginDemo2";
import Diet from "./Pages/Diet";
import Profile from "./Pages/Profile";
import { ReactSession }  from 'react-client-session';
import AdminPage from "./Pages/AdminPage";
import EditProfile from "./Pages/EditProfile";

function App() 
{

  if(ReactSession.get("email")== "logout")
  {
    return (
      <BrowserRouter>
      
        <Routes>
         
          <Route path="/" element={<LoginDemo2/>}/>
  
        </Routes>
       
      </BrowserRouter>
    );

  }
  else if(ReactSession.get("role")== "user"||ReactSession.get("role")== "User")
  {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bmi-calculator" element={<BMICal/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/" element={<LoginDemo2/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

else if(ReactSession.get("role")== "admin"||ReactSession.get("role")== "Admin")
  {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bmi-calculator" element={<BMICal/>}/>
        <Route path="/manageUsers" element={<AdminPage/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/" element={<LoginDemo2/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}
}

export default App;

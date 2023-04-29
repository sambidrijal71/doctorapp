import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/auth/Register/RegisterPage";
import LoginPage from "./Pages/auth/Login/LoginPage";
import HomePage from './Pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;

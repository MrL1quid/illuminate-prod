import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import styles from './App.module.css'
import Contact from "./pages/Contact";
import Return from '../../UI/Return'

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Return/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;

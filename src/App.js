import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notfound from './components/Notfound';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import Result from "./components/Result";
import { useCustomContext } from "./UseUserContext";
import { CircularProgress } from "@mui/material";
import Loading from "./components/Loading";

function App() {
  const {  loading } = useCustomContext()
  return (
    <Router>
      <div className="layout App" >
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/quiz" element={!loading ? <Quiz /> : <Loading />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>

    </Router>
  )
}
export default App;
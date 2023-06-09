import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Notfound from './components/Notfound';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import { NameContext } from './components/DetailForm'
import Result from "./components/Result";
import axios from "axios";
import { Array } from "./components/LandingPage";

function App() {

  const [Name, setName] = useState("");
  const [score, setscore] = useState(0);
  const [questions, setquestions] = useState([]);
  const [loading, setloading] = useState(true);

  const getques = (ques) => {
    setquestions(ques)
  }

  console.log("Going in ->", questions);
  // if (loading) return (<><p>loading...</p></>)
  return (
    <Router>
      <div className="layout App" >
        <Routes>
          <Route path="/" exact element={<LandingPage
            Name={Name}
            setName={setName}
            getques={getques}
            loading={loading}
            setloading={setloading}
          // Fetchquestions={Fetchquestions}
          />} />
          {!loading ?


            <Route path="/quiz" element={<Quiz
              Name={Name}
              setName={setName}
              questions={questions}
              loading={loading}
              // setQuestions={setQuestions}
              score={score}
              setscore={setscore}
            />} />
            : null}
          <Route path="/result" element={<Result
            score={score}
            setscore={setscore}
          />} />
          <Route path="*" element={<Notfound />} />


        </Routes>
      </div>

    </Router>
  )
}
export default App;
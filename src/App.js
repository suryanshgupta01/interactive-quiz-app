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
let questions = []
function App() {

  const [Name, setName] = useState("");
  const [score, setscore] = useState(0);
  // const [questions, setQuestions] = useState([]);
  const arr1 = [3, 4, 6, 8, 2]

  // useEffect(() => {
  //   setscore(score=>score+1)
  //   // console.log("score",score)
  // }, []);

  console.log("many times run", score)
  // const fetchQuestions = async (number=10,category = "", difficulty = "") => {
  //   console.log("function called")
  //   const { data } = await axios.get(
  //     `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
  //     }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  //   );
  //   console.log(questions)
  //   setQuestions(data.results);
  // };


  const Fetchquestions = (number, category, difficulty) => {
    // console.log("fhag", number, category, difficulty)
    try {
      fetch(
        `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`
      ).then((res) => res.json()).then((data) => {
        console.log(data.results);
        questions = (data.results);
      })
      // console.log(response);
      // const data = await response.json();
      // console.log(data.results);
      // questions = (data.results);
      // localStorage.setItem("questions", data.results)
      console.log("Going in ->", questions);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("first")

  // const Fetchquestions=async(number, category, difficulty)=> {
  //   try {
  //       console.log(number,difficulty)
  //       const response = await fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`);
  //       console.log(response)
  //       const data = await response.json();
  //       console.log(data)
  //       setQuestions(data.results);
  //       console.log(Questions)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  return (
    <Router>

      <div className="layout App" >


        {/* // style={{backgroundImage:"url(./quiz.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"2"}} */}


        {/* A <Routes> looks through its children <Route>s and renders the first one that matches the current URL. */}

        <Routes>

          <Route path="/" exact element={<LandingPage
            Name={Name}
            setName={setName}
            Fetchquestions={Fetchquestions}
          />} />

          <Route path="/quiz" element={<Quiz
            Name={Name}
            setName={setName}
            questions={questions}
            // setQuestions={setQuestions}
            score={score}
            setscore={setscore}
          />} />
          <Route path="/result" element={<Result
            score={score}
            setscore={setscore}
          />} />
          <Route path="*" element={<Notfound />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
export { questions }
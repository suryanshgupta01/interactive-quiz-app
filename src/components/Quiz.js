import React, { useContext, useState, useEffect } from 'react'
import { NameContext } from '../components/DetailForm'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
// import { questions } from '../App'

const Quiz = ({ Name, setName, questions, loading, score, setscore }) => {
  const navigate = useNavigate()
  // if (!questions) return (<><p>Loading..</p></>)

  console.log("Q", questions, Name)
  const len = questions.length;
  // const [last, setlast] = useState(false);
  const [questioncount, setquestioncount] = useState(0);
  if (questioncount === len && len !== 0) {
    navigate('/result')
    return
  }
  let ismcq = true
  const incorrlen = questions[questioncount].incorrect_answers.length
  if (incorrlen === 1) ismcq = false
  console.log(ismcq)
  let options = new Array(1 + incorrlen)

  const random = Math.floor(Math.random() * (1 + incorrlen))
  options[random] = questions[questioncount].correct_answer
  let j = 0;
  for (let i = 0; i < (1 + incorrlen); i++) {
    if (options[i] === undefined) {
      options[i] = questions[questioncount].incorrect_answers[j];
      j++;
    }
  }
  console.log(options)
  const submitanswer = (index) => {
    if (options[index] === questions[questioncount].correct_answer) {
      // score++;
      // localStorage.setItem("SCORE", score)
      setscore(score + 1)
    }
    else {
      const clickedclass = "class" + index.toString()
      document.getElementsByClassName(clickedclass)[0].style.backgroundColor = "#D20414"
    }
    const correctclass = "class" + random.toString()
    document.getElementsByClassName(correctclass)[0].style.backgroundColor = "#03C04A"
    // console.log(score)
  }
  return (

    <div className='quizpage'>
      <span>Quiz test</span>
      <section className='greet'>Welcome,{Name}</section>
      <div className='three'>
        <section className='category'>Category:{questions[questioncount].category}</section>
        <section className='Qscore'>Score:{score}</section>
      </div>
      <span className='noofques'>Question {questioncount + 1}of{len}</span>
      <div className='box'>
        <div className='question'>Ques:-{questions[questioncount].question}</div>
        <div className='Qoptions'>{options.map((ele, index) => <div key={ele} onClick={() => submitanswer(index)} className={`solo class${index}`}  >{ele}</div>)}</div>
        {/* <Link to='/result'>Submit</Link> */}
        {/* <button onClick={() => setquestioncount(questioncount - 1)}>prev questoin</button> */}
        {/* <button onClick={() => setquestioncount(questioncount + 1)}>Next questoin</button> */}
        <div className='allbuttons'>

          <Button variant="contained" className='button'>
            <Link to='/result' >Submit</Link></Button>
          <Button variant="contained" className='button' onClick={() => setquestioncount(questioncount - 1)} style={{ backgroundColor: "magenta" }}>
            Prev questoin</Button>
          <Button variant="contained" className='button' onClick={() => setquestioncount(questioncount + 1)} style={{ backgroundColor: "green" }}>
            Next questoin</Button>
        </div>
      </div>


      {/* {questions.map((ele) => <h2>{ele.question}</h2>)} */}
    </div>
  )
}

export default Quiz

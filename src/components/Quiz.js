import React, { useContext, useState, useEffect, useMemo } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useCustomContext } from '../UseUserContext'
import ErrorMessage from './ErrorMessage'

const Quiz = () => {
  const { score, setscore, questions, Name } = useCustomContext()

  const len = questions.length;
  const [questioncount, setquestioncount] = useState(0);
  const [error, seterror] = useState("");
  let random1 = 0;
  let options1 = useMemo(() => {
    // console.log(questioncount, len)
    if (questioncount >= len) { return []; }
    const incorrlen = questions[questioncount].incorrect_answers.length
    let array = new Array(1 + incorrlen);
    random1 = Math.floor(Math.random() * (1 + incorrlen));
    array[random1] = questions[questioncount].correct_answer;
    let j = 0;
    for (let i = 0; i < (1 + incorrlen); i++) {
      if (array[i] === undefined) {
        array[i] = questions[questioncount].incorrect_answers[j];
        j++;
      }
    }
    return array;
  }, [questioncount]);

  // console.log(questions)

  const alloptions = document.getElementsByClassName('Qoptions')[0]
  const submitanswer = (index) => {
    if (options1[index] === questions[questioncount].correct_answer) {
      setscore(score + 1)
    }
    else {
      // console.log(index)
      const clickedclass = "class" + index.toString()
      document.getElementsByClassName(clickedclass)[0].style.backgroundColor = "#D20414"
    }
    const correctclass = "class" + random1.toString()
    document.getElementsByClassName(correctclass)[0].style.backgroundColor = "#03C04A"

    if (alloptions) {
      alloptions.classList.add('clicked')
      seterror("")
    }
  }

  if (questioncount >= len) {
    return <Navigate to='/result' />
  }

  return (

    <div className='quizpage'>
      <span>Quiz test</span>
      <section className='greet'>Welcome,{Name}</section>
      <div className='three'>
        <section className='category'>Category:<br />{questions[questioncount].category}</section>
        <section className='Qscore'>Score:{score}</section>
      </div>
      <span className='noofques'>Question {questioncount + 1} of {len}</span>
      <div className='box'>
        <div className='question'>Ques:-{questions[questioncount].question}</div>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className='Qoptions'>{options1.map((ele, index) => <div key={ele} onClick={() => submitanswer(index)} className={`solo class${index}`}  >{ele}</div>)}</div>
        <div className='allbuttons'>

          <Button variant="contained" className='button'>
            <Link to='/result' >Submit</Link></Button>
          {/* <Button variant="contained" className='button' onClick={() => setquestioncount(questioncount - 1)} style={{ backgroundColor: "magenta" }}>
            Prev questoin</Button> */}
          <Button variant="contained" className='button' onClick={() => {
            if (alloptions) {
              if (!alloptions.classList.contains('clicked')) {
                console.log("contains clicked")
                seterror("Please pick an option!")
                return;
              }
              alloptions.classList.remove('clicked')
            }
            setquestioncount(questioncount + 1);
          }} style={{ backgroundColor: "green" }}>
            {(questioncount + 1) === len ? 'End Test' : 'Next question'}</Button>
        </div>
      </div>
    </div>
  )
}

export default Quiz

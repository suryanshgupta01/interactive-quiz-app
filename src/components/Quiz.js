import React, { useContext, useState, useEffect, useMemo } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useCustomContext } from '../UseUserContext'
import ErrorMessage from './ErrorMessage'

const Quiz = () => {
  const { score, setscore, questions, Name } = useCustomContext()
  const [isclicked, setisclicked] = useState(false);
  // questions = questions.filter((ele) => ele.type === 'multiple')
  const len = questions.length;

  const [questioncount, setquestioncount] = useState(0);
  const [error, seterror] = useState("");
  let random1 = 0;
  let options1 = useMemo(() => {
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
    // console.log(questioncount, array, incorrlen, questions[questioncount])
    return array;
  }, [questioncount]);

  // console.log(questions)

  const submitanswer = (index) => {
    setisclicked(true)
    if (options1[index] === questions[questioncount].correct_answer) {
      setscore(score + 1)

      const correctclass = "class" + random1.toString()
      document.getElementsByClassName(correctclass)[0].style.backgroundColor = "#03C04A"
    }
    else {
      // console.log(index)
      const clickedclass = "class" + index.toString()
      document.getElementsByClassName(clickedclass)[0].style.backgroundColor = "#D20414"


      const correctclass = "class" + random1.toString()
      document.getElementsByClassName(correctclass)[0].style.backgroundColor = "#03C04A"
    }
  }
  const alloptions = document.getElementsByClassName('Qoptions')[0]
  if (isclicked)
    alloptions.classList.add('clicked')
  if (questioncount >= len) {
    return <Navigate to='/result' />
  }

  return (

    <div className='quizpage'>
      <span>Quiz test</span><hr style={{
        color: 'gray',
        backgroundColor: 'gray',
        height: 2,
        width: '95%'
      }} />
      {/* <div
        dangerouslySetInnerHTML={{ __html: questions[questioncount].question }}
      /> */}
      <section className='greet'>Welcome,{Name}</section>
      <div className='three'>
        <section className='category'>Category: {questions[questioncount].category}</section>
        <section className='Qscore'>Score: {score}</section>
      </div>
      <span className='noofques'>Question {questioncount + 1} of {len}</span>
      <div className='box'>
        <div className='question' dangerouslySetInnerHTML={{ __html: questions[questioncount].question }}></div>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className='Qoptions'>{options1.map((ele, index) => <div key={ele} onClick={() => submitanswer(index)} className={`solo class${index}`} dangerouslySetInnerHTML={{ __html: ele }} ></div>)}</div>
        <div className='allbuttons'>

          <Button variant="contained" className='button'>
            <Link to='/result' >Submit</Link></Button>
          {/* <Button variant="contained" className='button' onClick={() => setquestioncount(questioncount - 1)} style={{ backgroundColor: "magenta" }}>
            Prev questoin</Button> */}
          <Button variant="contained" className='button' onClick={() => {

            if (alloptions) {
              if (!alloptions.classList.contains('clicked')) {
                seterror("Please pick an option!")
                return;
              }
              setisclicked(false)
              seterror("")
              alloptions.classList.remove('clicked')
            }
            for (let i = 0; i < options1.length; i++) {
              const clickedclass = "class" + i.toString()
              document.getElementsByClassName(clickedclass)[0].style.backgroundColor = "#efefef"
            }
            setquestioncount(questioncount + 1);
          }} style={{ backgroundColor: "green" }}>
            {(questioncount + 1) === len ? 'End Test' : 'Next question'}</Button>
        </div>
      </div>
    </div >
  )
}

export default Quiz

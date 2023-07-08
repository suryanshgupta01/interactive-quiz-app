import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCustomContext } from '../UseUserContext'

const Result = () => {
  const { score, setscore } = useCustomContext()
  const navigate = useNavigate()
  return (
    <div className='result'>
      <h1>FINAL SCORE : {score}</h1>
      <br />
      <Button variant="contained" className='button' style={{ width: "35%" }}
       onClick={() => { setscore(0); navigate('/') }}>
        Play again</Button>
    </div>
  )
}

export default Result

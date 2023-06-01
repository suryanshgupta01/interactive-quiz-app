import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({ score, setscore }) => {

  return (
    <div className='result'>
      <h1>FINAL SCORE : {score}</h1>
      <br />

      <Button variant="contained" className='button' style={{ width: "35%" }}>
        <Link to='/' onClick={() => setscore(0)}>Play again</Link></Button>
    </div>
  )
}

export default Result

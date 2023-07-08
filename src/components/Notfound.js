import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      flexDirection: 'column'
    }}
    >
      <h1
        style={{
          fontSize: '5rem',
          color: 'red'
        }}
      >404 NOT FOUND</h1>
      <Button variant="contained" className='button ' style={{ width: "35%" }}
        onClick={() => { navigate('/') }}>
        GO BACK</Button>
    </div>
  )
}

export default Notfound

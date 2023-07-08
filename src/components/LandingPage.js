import React, { useState, createContext } from 'react'
import logo from '../assets/undraw_Online_test_re_kyfx.png'
import categories from '../assets/categories'
import difficulty from '../assets/difficulty';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router'
import { useCustomContext } from '../UseUserContext';
import ErrorMessage from './ErrorMessage';

const LandingPage = () => {

    const { setquestions, setloading, setName } = useCustomContext()
    const [category1, setcategory1] = useState("");
    const [difficulty1, setdifficulty1] = useState("");
    const [number, setnumber] = useState(10);
    const [error, seterror] = useState(false);
    const navigate = useNavigate()
    const Fetchquestions = async (number, category, difficulty) => {
        if (!category || !difficulty || !number) { seterror("Fill all fields"); return; }
        setloading(true)
        try {
            await fetch(
                `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.response_code === 1) { seterror("Too many questions asked! Try again"); return; }
                    setquestions(data.results);
                    setloading(false)
                    navigate('/quiz')
                })
        } catch (error) {
            console.log(error);
            setloading(false)
        }
    }

    return (
        <div className='landingpage'>
            <span className='quizname'>Quiz App</span><br />
            <div className='form_image'>
                <img src={logo} className='quizimage' alt="image here" />
                <div className='form'>
                    <p className='setting'>Quiz Setting</p><br />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <TextField className='input'
                        style={{ marginTop: -20, marginBottom: 25 }}
                        id="outlined-search"
                        label="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        type="search"
                    />
                    <TextField
                        id="outlined-select-currency"
                        select style={{ marginBottom: 25 }}
                        label="Select category"
                        value={category1}
                        // defaultValue={19}
                        onChange={(e) => setcategory1(e.target.value)}
                        className='options input'
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency"
                        select style={{ marginBottom: 25 }}
                        label="Select difficulty"
                        value={difficulty1}
                        // defaultValue={"hard"}
                        onChange={(e) => setdifficulty1(e.target.value)}
                        className='options input'
                    >
                        {difficulty.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField className='input'
                        id="outlined-number"
                        label="Number"
                        style={{ marginBottom: 25 }}
                        onChange={(e) => setnumber(e.target.value)}
                        defaultValue={10}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                    <Button variant="contained" style={{ width: '90%' }} className="button" onClick={() => Fetchquestions(number, category1, difficulty1)}>
                        start quiz
                    </Button>

                </div>

            </div>
        </div>
    )
}

export default LandingPage

import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from '../assets/undraw_Online_test_re_kyfx.png'
import DetailForm from './DetailForm';
import categories from '../assets/categories'
import difficulty from '../assets/difficulty';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router'

let Array1 = [3, 5, 2, 2, 1]
const LandingPage = ({ Name, setName, Fetchquestions }) => {

    var arr = new Array(4)
    for (let i of arr) console.log(i)
    // const [name, setName] = useState("");
    // const [Name, setName] = useState("");
    // const [Questions, setQuestions] = useState([]);
    // const [score, setscore] = useState(0);
    // const [questions, setQuestions] = useState([]);
    const [category1, setcategory1] = useState("");
    const [difficulty1, setdifficulty1] = useState("");
    const [number, setnumber] = useState(10);

    const navigate = useNavigate()
    // const history = useHistory();

    // const fetchQuestions = async (number, category, difficulty) => {
    //     try {
    //         console.log(number, difficulty);
    //         const response = await fetch(
    //             `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`
    //         );
    //         // console.log(response);
    //         const data = await response.json();
    //         console.log(data.results);
    //         setQuestions(data.results);
    //         console.log(questions);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const handleClick = () => {
        console.log("clicked button")
        if (!category1 || !difficulty1) {
            // setError(true);
            // return

        } else {
            // setError(false);
            // Fetchquestions(number, category1, difficulty1);
            // setTimeout(() => {
            // }, 3000);
            navigate("/quiz");
            // return
        }
    };

    // const handleClick = () => {
    //     // e.preventDefault()
    //     navigate('/quiz');
    //     Fetchquestions(number, category1, difficulty1)

    // setName("")
    //i simply could have set data in local storage and access where ever you want
    //but here i didnot do this
    //and went with react way of passing attributes

    // localStorage.setItem("name", name)
    // localStorage.setItem("category", category1)
    // localStorage.setItem("difficulty", difficulty1)
    // localStorage.setItem("number", number)



    // }

    return (
        <div className='landingpage'>
            <span className='quizname'>Quiz App</span><br />
            <div className='form_image'>
                <img src={logo} className='quizimage' alt="image here" />
                <div className='form'>
                    <p className='setting'>Quiz Setting</p><br />
                    <form>
                        <TextField
                            className='input'
                            style={{ marginTop: -20, marginBottom: 25 }}
                            id="outlined-search"
                            label="Enter your name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            type="search"
                        />

                        {/* <TextField className='input' id="outlined-search" label="Enter category" type="search" /> */}
                        {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
                        {/* <label htmlFor="name">Name:</label><br />
                <input type="text" className='input' id="name" name="name" onChange={(e) => setName(e.target.value)} /><br /> */}
                        {/* <label htmlFor="subject">Subject</label><br />
                <select className='input' id="subject" name="subject">
                
                {categories.map((subject) => (
                    <option key={subject.value} value={subject.value}>{subject.category}</option>
                    ))}
                </select><br /> */}
                        <TextField
                            id="outlined-select-currency"
                            select style={{ marginBottom: 25 }}
                            label="Select category"
                            value={category1}
                            // defaultValue={19}
                            onChange={(e) => setcategory1(e.target.value)}
                            className='options input'
                        // defaultValue="20"
                        // helperText="Please select category"
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
                            label="Select"
                            value={difficulty1}
                            // defaultValue={"hard"}
                            onChange={(e) => setdifficulty1(e.target.value)}
                            className='options input'
                        // defaultValue="easy"
                        // helperText="Please select your currency"
                        >
                            {difficulty.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            className='input'
                            id="outlined-number"
                            label="Number"
                            style={{ marginBottom: 25 }}
                            onChange={(e) => setnumber(e.target.value)}
                            defaultValue={10}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        {/* <label htmlFor="difficulty">difficulty</label><br />
                <select className='difficulty input' name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select> */}

                        <Button variant="contained" className="button" onClick={() => Fetchquestions(number, category1, difficulty1)}>
                            <Link to='/quiz'>start quiz</Link>
                        </Button>
                        {/* <button className="start" type="submit" value="Submit" onClick={handleClick}>Submit</button> */}
                    </form>
                </div>

                {/* <DetailForm /> */}
            </div>
        </div>
    )
}

export default LandingPage

import React, { useState, useEffect, createContext } from 'react';
import categories from '../assets/categories'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NameContext = createContext()

const DetailForm = () => {

    const [name, setName] = useState("");
    const [category1, setcategory1] = useState("");
    const [difficulty1, setdifficulty1] = useState("");
    const [number, setnumber] = useState(10);

    const handleClick = (e) => {
        e.preventDefault()
        console.log(name);
        localStorage.setItem("name", name)
        localStorage.setItem("category", category1)
        localStorage.setItem("difficulty", difficulty1)
        localStorage.setItem("number", number)

        setName("")

        // document.getElementById('name').innerHTML = ""
    }
    const difficulty = [
        {
            value: 'easy',
            label: 'Easy',
        },
        {
            value: 'medium',
            label: 'Medium',
        },

        {
            value: 'hard',
            label: 'Hard',
        },
    ];


    return (
        <>
            <NameContext.Provider value={"khbjhc"}>

                <div className='form'>
                    <p className='setting'>Quiz Setting</p><br />
                    <form>
                        <TextField
                            className='input'
                            style={{ marginTop: -20, marginBottom: 25 }}
                            id="outlined-search"
                            label="Enter your name"
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
                        <Button variant="contained"
                            style={{ backgroundColor: "red" }}
                            className="button" onClick={handleClick}><Link to='/quiz'>Start Quiz</Link></Button>
                        {/* <button className="start" type="submit" value="Submit" onClick={handleClick}>Submit</button> */}
                    </form>
                </div>
            </NameContext.Provider>
        </>
    );
};

export default DetailForm
export { NameContext }
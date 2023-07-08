import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const UseUserContext = ({ children }) => {
    const [score, setscore] = useState(0);
    const [questions, setquestions] = useState([]);
    const [loading, setloading] = useState(true);
    const [Name, setName] = useState("");

    return (
        <UserContext.Provider value={{
            score, setscore, questions, setquestions, loading, setloading, Name, setName
        }}>
        {children}
        </UserContext.Provider>
       
    )
}

export default UseUserContext

export const useCustomContext=()=>{
    return useContext(UserContext)
}
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// const {useState} = require('react');
// const axios = require('axios');
// const {useHistory} = require('react-router-dom');

export const Register = () => {
    const [user, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleRegister = async () => {
        try{
            await axios.post("http://localhost:3000/Register", {
                username : user,
                password : pass
            });
        }
        catch(err){
            console.log(err);
        }
        setUsername("");
        setPassword("");
        navigate('/');
    }

    return (
        <div className="register">
            <h2>Please register below!</h2>
            <input 
                value={user}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                value={pass}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}
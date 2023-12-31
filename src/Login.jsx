import App from "./App"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const token = await axios.post("http://localhost:3000/signin", {
            username : username,
            password : password
        });
        // localStorage.setItem("jwtToken", token.data);
        setUsername('');
        setPassword('');        
        navigate(`/todo/${token.data}`);
    }

    return (
        <div className="login">
            <h1>ToDo List</h1>
            <input 
                value={username}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Login</button>
            <Link to={"./Register"}>New User? Register here.</Link>
        </div>
    );
}
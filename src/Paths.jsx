import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./App"
import { Login } from "./Login"
import { Register } from "./Register"

function Paths () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />} />
                <Route path="/todo/:token" element={<App />}/>
            </Routes>
        </Router>
    );
}

export default Paths;
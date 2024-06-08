import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const checkUser = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:1400/api/v1/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                "email": e.target[0].value,
                "password": e.target[1].value
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await res.json();
        console.log(data)
        if(data.status === "success"){
            localStorage.setItem("authToken",data.data.token)
            // console.log("auth - token :- "+localStorage.getItem("authToken"));
            navigate('/');

        }
        else alert(data.msg)
    }

    return (
        <div id="signup" className="container">
            <form onSubmit={checkUser}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} required /><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} required /><br></br>
                <button type="submit">Login</button>
                <Link to="/signup"><button>SignUp</button></Link>
            </form>
        </div>
    )
}


export default Login
import React,{useState} from 'react';
import './Login.css'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../../actions/login'

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    async function loginIn(e){
        e.preventDefault();
        const loginData = {
                    email,
                    password
                }
        await dispatch(login(loginData));

        history.push('/graphs');
        window.location.reload();
    }

    return(
        <div className="container">
            <form className="login_form" onSubmit={loginIn}>
                <h2>SNAP User
                
                </h2>
                
                <h3 className="login-header">
                    Login
                </h3>

                <label for="email"><strong>User or Email</strong></label>
                <input 
                type="text" 
                id="email"
                class="input-box toggle" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}/>

                <label for="password"><strong>Password</strong></label>
                <input
                    type="password"
                    id="password"
                    class="input-box toggle"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button className="update-btn toggle">login</button>

                <div className="container">
                    <button type="submit" class="btn btn-lg">Forgot Password?</button>
                </div>
            </form>
        </div>
    )
}
export default Login
import React, { useState } from "react";
import style from './Login.module.css'
import Logo from '../../assets/pngimg.com - github_PNG40.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const uri = process.env.REACT_APP_URI

function LoginPage() {
    const [userName, setUserName] = useState("")
    const [error, setError] = useState("");
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async () => {
        if (!userName) {
            setError("Please enter username");
            return;
        }
        try {
            setDisable(true);
            // eslint-disable-next-line
            const response = await axios.get(`${uri}/users/${userName}`);
            navigate(`/home/${userName}`);
            setError("");
        } catch (err) {
            setError("User not found");
            setDisable(false);
        }
    };
    return (
        <>
            <div className={style["main__div"]}>
                <figure>
                    <img src={Logo} alt="logo" />
                </figure>
                <h2>Sign in to github!</h2>
                <div className={style["login__card"]}>
                    <label>Enter Username</label>
                    <input type='text'
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    {error && <small>{error}</small>}
                    <button 
                    onClick={handleSignIn}
                    disabled={disable}
                    className={disable ? style.disabledButton : ''}
                    >
                    {disable ? 'Signing In...' : 'Sign In'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
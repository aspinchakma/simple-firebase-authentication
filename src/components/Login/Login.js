import React from 'react';
import './Login.css';

const Login = () => {
    const backgrounImageLink = `https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg`;
    return (
        <div className="login-ui">
            <div class="image-login">
                <img src={backgrounImageLink} alt="" />
            </div>
            <div>
                <h2>Sign In</h2>


            </div>


        </div>
    );
};

export default Login;
import React from 'react';
import InputField from '../../components/extraPageComponents/inputField/inputField';
import login from '../../components/signInPageComponents/login.svg'

const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="left-sign-in">
                <img src={login} alt=""/>
                <h1>Sign into account</h1>
            </div>
            <div className="right-sign-in">
                <h1>Sign Up</h1>
                <InputField name="email" placeholder="Enter valid email" type="email" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <section>
                <input type="checkbox" name="remember" value="remember"/>
                <label htmlFor="remember" id="remember-label">Remember me</label>
                </section>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default SignIn;
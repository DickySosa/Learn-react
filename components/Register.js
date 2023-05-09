import React, { useState } from 'react';
import './register.css';

function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  //submit button hook
  const [submitted, setSubmited] = useState(false);
  //initial validatin hook, have to make some changes
  const [valid, setValid] = useState(false);
  //hook for validating the email
  const [validEmail, setValidEmail] = useState(false);
  const [notValidEmail, setNotValidEmail] = useState(false);
  //hook for the validation of the password
  const [validPassword, setValidPassword] = useState(false);

  const handleUsernameChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleConfirmPasswordChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      confirmPassword: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
    console.log(values);

    //SetValid hook
    if (
      values.username &&
      values.email &&
      values.password &&
      values.confirmPassword
    ) {
      setValid(true);
    }

    //setValidEmail && setNotValidEmail hooks
    if (
      values.email.includes('@') &&
      values.email.includes('.com') &&
      !values.email.includes(' ')
    ) {
      console.log('está jalando');
      setValidEmail(true);
    } else if (!values.email.includes('@') || !values.email.includes('.com')) {
      console.log('está jalando peo la estás cagando');
      setNotValidEmail(true);
    }

    //setValidPassword hook
    if (
      values.password.includes(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'
      )
    ) {
      setValidPassword(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted && valid ? (
        <div className="success-mesagge">Success! TY for registering</div>
      ) : null}
      <input
        type="text"
        placeholder="Username"
        className="username-input register-input-fields"
        value={values.username}
        onChange={handleUsernameChange}
      />
      <br />
      {submitted && !values.username ? (
        <span>Please enter a username</span>
      ) : null}
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Email"
        className="email-input register-input-fields"
        value={values.email}
        onChange={handleEmailChange}
      />
      <br />
      {submitted && validEmail ? (
        <span className="success-mesagge">Please enter an email</span>
      ) : null}
      {submitted && notValidEmail ? (
        <span>Please enter a valid email</span>
      ) : null}
      <br></br>
      <br></br>
      <input
        type="password"
        placeholder="Password"
        className="password-input register-input-fields"
        value={values.password}
        onChange={handlePasswordChange}
      />
      <br />
      {submitted && !values.password ? (
        <span>Please enter a password</span>
      ) : null}
      {submitted && validPassword ? <span>correct password</span> : null}
      <br></br>
      <br></br>
      <input
        type="password"
        placeholder="Confirm password"
        className="corfirm-password-input register-input-fields"
        value={values.confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <br />
      {submitted && !values.confirmPassword ? (
        <span>Please confirm your password</span>
      ) : null}
      <br></br>
      <br></br>
      <button type="submit" className="submit-btn">
        REGISTER
      </button>
    </form>
  );
}

export default Register;


//sign in  stuff

import React, {useState} from 'react'
import './signIn.css';

function SignIn() {

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const [submitted, setSubmited] = useState(false)

    const [valid, setValid] = useState(false)

    const handleUsernameChange = (event) => {
        event.persist();
	setValues((values) => ({
		...values,
		username: event.target.value,
	}));
    }

    const handlePasswordChange = (event) => {
        event.persist();
	setValues((values) => ({
		...values,
		password: event.target.value,
	}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmited(true)
        console.log(values)
        if(values.username && values.password) {
            setValid(true)
        }
    }

  return (
        <form onSubmit={handleSubmit}>
            {submitted && valid ?  <div className="success-mesagge">Success! TY for Sign in</div> : null}
    
            <input type="text" 
            className="username-input sign-in-input-fields" 
            placeholder='Username'
            value={values.username}  
            onChange={handleUsernameChange}/> <br/>
             {submitted && !values.username ? <span>Please enter a username</span> : null}
            <br></br><br></br>

            
            <input type="password" 
            className="password-input sign-in-input-fields" 
            placeholder='Password'
            value={values.password} 
            onChange={handlePasswordChange}/> <br/>
             {submitted && !values.password ? <span>Please enter a password</span> : null}
            <br></br><br></br>

            <div className='forgotPassword'>Forgot password?</div>
            <br></br><br></br>
            <br></br><br></br>

            <button type="submit" className="submit-btn">SIGN IN</button>  
            

        </form>
  )
}

export default SignIn
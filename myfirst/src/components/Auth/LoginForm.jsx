import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] =useState({
    email: '',
    password: '',
    // Add other necessary fields
  });

  // const navigate = useNavigate()
  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData =>",formData);
    dispatch(loginUser(formData));

    // Handle form submission logic here
  };

  return (
    <>
    <div className=' w-100% h-700px bg-red-600 flex justify-center align-center'>

    <div className="container"  >
      <div className="heading">Login</div>
      <form onSubmit={handleSubmit} className="form">
        <input required className="input" type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={onChange} />
        <input required className="input" type="password" name="password" id="password" placeholder="Password" value={password} onChange={onChange}/>
        <input className="login-button" type="submit" value="Login" />
      </form>
      <div className="social-account-container">
        <span className="title">Or Sign in with</span>
        <div className="social-accounts">
          <button className="social-button google">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
              {/* SVG path */}
            </svg>
          </button>
          <button className="social-button apple">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              {/* SVG path */}
            </svg>
          </button>
          <button className="social-button twitter">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              {/* SVG path */}
            </svg>
          </button>
        </div>
      </div>
      <span className="agreement"><a href="#">Learn user licence agreement</a></span>
    </div>
    </div>
    
    </>
   
  );
};

export default LoginForm;

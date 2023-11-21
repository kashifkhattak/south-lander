import Tips from "../components/tips";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";

import packageService from "../services/package-service";

const Login = () => {

  const [user, setUser] = useState({
    username: null,
    password: null
  });

  useEffect(() => {

  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const loginUser = async () => {
    console.log(user)
    //user service
    // try {
    //   const response = await fetch('YOUR_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log('Login successful:', data);
    //   } else {
    //     console.error('Login failed:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('An error occurred during login:', error.message);
    // }
  };

  
  return (
    <>
      <Navbar />
      <div className="tr-register">
        <div className="tr-regi-form">
          <h4>Sign In</h4>
          <p>Explore Ecuador's most innovative<br />destination experience offer</p>
          <form className="col s12" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" value={user.username} name="username" onChange={handleInputChange} placeholder="User Name" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="password" className="validate" value={user.password} name="password" onChange={handleInputChange} placeholder="Password" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="submit" value="submit" className="waves-effect waves-light btn-large full-btn" /> 
              </div>
            </div>
          </form>
          <p>
            <Link to="/forgot-password">Forgot Password?</Link> | Are you a new user ? <Link to="/register">Register</Link>
          </p>
          <div className="soc-login">
            <h4>Sign in using</h4>
            <ul>
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook fb1"></i> Facebook</a> </li>
              <li><a href="https://twitter.com/"><i className="fab fa-twitter tw1"></i> Twitter</a> </li>
              <li><a href="https://google.com/"><i className="fab fa-google-plus gp1"></i> Google</a> </li>
            </ul>
          </div>
        </div>
      </div>
      <Tips />
      <Footer />
    </>
  );
};

export default Login;

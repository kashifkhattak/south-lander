import Tips from "../components/tips";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";

// import packageService from "../services/package-service";

const Login = () => {

  const [packages, setPackages] = useState([])

  useEffect(()=>{
    
  },[])

  return (
    <>
      <Navbar />
      <div className="tr-register">
        <div className="tr-regi-form">
          <h4>Sign In</h4>
          <p>Explore Ecuador's most innovative<br />destination experience offer</p>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" placeholder="User Name" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="password" className="validate" placeholder="Password" required />
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
              <li><a href="#"><i className="fab fa-facebook fb1"></i> Facebook</a> </li>
              <li><a href="#"><i className="fab fa-twitter tw1"></i> Twitter</a> </li>
              <li><a href="#"><i className="fab fa-google-plus gp1"></i> Google</a> </li>
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

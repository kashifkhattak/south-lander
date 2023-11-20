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
      <div class="tr-register">
        <div class="tr-regi-form">
          <h4>Sign In</h4>
          <p>Explore Ecuador's most innovative<br />destination experience offer</p>
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="validate full-width" placeholder="User Name" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="validate full-width" placeholder="Password" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="submit" value="submit" class="waves-effect waves-light btn-large full-btn" /> 
              </div>
            </div>
          </form>
          <p>
            <Link to="/forgot-password">Forgot Password?</Link> | Are you a new user ? <Link to="/register">Register</Link>
          </p>
          <div class="soc-login">
            <h4>Sign in using</h4>
            <ul>
              <li><a href="#"><i class="fab fa-facebook fb1"></i> Facebook</a> </li>
              <li><a href="#"><i class="fab fa-twitter tw1"></i> Twitter</a> </li>
              <li><a href="#"><i class="fab fa-google-plus gp1"></i> Google</a> </li>
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

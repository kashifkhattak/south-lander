import Tips from "../components/tips";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";

// import packageService from "../services/package-service";

const Register = () => {

  const [packages, setPackages] = useState([])

  useEffect(()=>{
    
  },[])

  return (
    <>
      <Navbar />
      <div class="tr-register">
        <div class="tr-regi-form">
          <h4>Create an Account</h4>
          <p>It's free and always will be.</p>
          <form class="col s12">
            <div class="row">
              <div class="input-field col m6 s12">
                <input type="text" class="validate full-width" />
                <label>First Name</label>
              </div>
              <div class="input-field col m6 s12">
                <input type="text" class="validate full-width" />
                <label>Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="number" class="validate" />
                <label>Nationality</label>
              </div>
            </div>
                      <div class="row">
              <div class="input-field col s6">
                <select>
                  <option disabled selected>Type of ID</option>
                  <option>Passport</option>
                  <option>Driver's License</option>
                  <option>Other Government Issued ID</option>
                </select>
              </div>
              <div class="input-field col s6">
                <input type="number"  class="validate" name="id" required />
                <label>Enter your ID number</label>
              </div>
            </div>
                      <div class="row">
              <div class="input-field col s12">
                <input type="number" class="validate" />
                <label>Enter your phone</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="email" class="validate" />
                <label>Enter your email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input type="password" class="validate" />
                <label>Password</label>
              </div>
                          <div class="input-field col m6 s12">
                <input type="password" class="validate" />
                <label>Confirm Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="submit" value="Register" class="waves-effect waves-light btn-large full-btn" />
              </div>
            </div>
          </form>          
          <p>Are you a already registered ? <Link to="/login">Click to Login</Link></p>
        </div>
		  </div>
      <Tips />
      <Footer />
    </>
  );
};

export default Register;

import Tips from "../components/tips";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";

// import packageService from "../services/package-service";

const Register = () => {

  const [packages, setPackages] = useState([])

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
                <input type="text" class="validate full-width" placeholder="First Name" />
              </div>
              <div class="input-field col m6 s12">
                <input type="text" class="validate full-width" placeholder="Last Name" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="number" class="validate" placeholder="Nationality" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
              <select id="idType" required>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>

                {/* <select>
                <option value="" disabled selected>
                  Type of ID
                </option>
                  <option value="Passport">Passport</option>
                  <option value="Driver's License">Driver's License</option>
                  <option value="Other Government Issued ID">Other Government Issued ID</option>
                </select> */}
              </div>
              <div class="input-field col s6">
                <input type="number"  class="validate" name="id" placeholder="Enter your ID number" required />
              </div>
            </div>
                      <div class="row">
              <div class="input-field col s12">
                <input type="number" class="validate" placeholder="Enter your phone" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="email" class="validate" placeholder="Enter your email" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input type="password" class="validate" placeholder="Password" />
              </div>
                          <div class="input-field col m6 s12">
                <input type="password" class="validate" placeholder="Confirm Password" />
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

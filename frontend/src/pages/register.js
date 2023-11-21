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
      <div className="tr-register">
        <div className="tr-regi-form">
          <h4>Create an Account</h4>
          <p>It's free and always will be.</p>
          <form className="col s12">
            <div className="row">
              <div className="input-field col m6 s12">
                <input type="text" className="validate" placeholder="First Name" required />
              </div>
              <div className="input-field col m6 s12">
                <input type="text" className="validate" placeholder="Last Name" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="number" className="validate" placeholder="Nationality" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <select required>
                  <option value="" disabled selected>
                    Type of ID
                  </option>
                  <option value="Passport">Passport</option>
                  <option value="Driver's License">Driver's License</option>
                  <option value="Other Government Issued ID">
                    Other Government Issued ID
                  </option>
                </select>


                <div class="custom-select-wrapper">
                  <input type="text" class="custom-select-input" value="Type of ID" />
                  <ul class="custom-dropdown-content" style={{"width": "406.25px", "position": "absolute", "top": "0px", "left": "0px", "opacity": 1}}>
                    <li class="disabled"><span>Type of ID</span></li>
                    <li class=""><span>Passport</span></li>
                    <li class="active selected"><span>Driver's License</span></li>
                    <li class=""><span>Other Government Issued ID</span></li>
                  </ul>
                </div>

              </div>
              <div className="input-field col s6">
                <input type="number" className="validate" name="id" placeholder="Enter your ID number" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="number" className="validate" placeholder="Enter your phone" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="email" className="validate" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col m6 s12">
                <input type="password" className="validate" placeholder="Password" required />
              </div>
              <div className="input-field col m6 s12">
                <input type="password" className="validate" placeholder="Confirm Password" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="submit" value="Register" className="waves-effect waves-light btn-large full-btn" />
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

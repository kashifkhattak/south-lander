import Tips from "../components/tips";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";

// import packageService from "../services/package-service";

const Register = () => {

  const [user, setUser] = useState({
    id: null,
    phone: null,
    email: null,
    idType: null,
    password: null,
    firstname: null,
    lastname:  null,
    nationality: null,
    confirmPassword: null,
  });


  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const registerUser = async () => {
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
          <h4>Create an Account</h4>
          <p>It's free and always will be.</p>
          <form className="col s12" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="input-field col m6 s12">
                <input type="text" className="validate" value={user.firstname} name="firstname" onChange={handleInputChange} placeholder="First Name" required />
              </div>
              <div className="input-field col m6 s12">
                <input type="text" className="validate" value={user.lastname} name="lastname" onChange={handleInputChange} placeholder="Last Name" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="number" className="validate" value={user.nationality} name="nationality" onChange={handleInputChange} placeholder="Nationality" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 bf-row-single">
                <select required value={user.idType} name="idType" onChange={handleInputChange}>
                  <option value="" disabled selected>
                    Type of ID
                  </option>
                  <option value="Passport">Passport</option>
                  <option value="Driver's License">Driver's License</option>
                  <option value="Other Government Issued ID">
                    Other Government Issued ID
                  </option>
                </select>

               
                {/* <div class="custom-select-wrapper">
                  <input type="text" class="custom-select-input" value="Type of ID" />
                  <ul class="custom-dropdown-content" style={{"width": "406.25px", "top": "0px", "left": "0px", "opacity": 1}}>
                    <li class="disabled"><span>Type of ID</span></li>
                    <li class=""><span>Passport</span></li>
                    <li class="active selected"><span>Driver's License</span></li>
                    <li class=""><span>Other Government Issued ID</span></li>
                  </ul>
                </div> */}

              </div>
              <div className="input-field col s6">
                <input type="number" className="validate" value={user.id} name="id" onChange={handleInputChange} placeholder="Enter your ID number" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="number" className="validate" value={user.phone} name="phone" onChange={handleInputChange} placeholder="Enter your phone" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="email" className="validate" value={user.email} name="email" onChange={handleInputChange} placeholder="Enter your email" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col m6 s12">
                <input type="password" className="validate" value={user.password} name="password" onChange={handleInputChange} placeholder="Password" required />
              </div>
              <div className="input-field col m6 s12">
                <input type="password" className="validate" value={user.confirmPassword} name="confirmPassword" onChange={handleInputChange} placeholder="Confirm Password" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="submit" value="Register" className="waves-effect waves-light btn-large full-btn" onSubmit={registerUser} />
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

import React from "react";
import toast from "react-hot-toast";
import Tips from "../components/tips";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import userService from "../services/user-service";

const Register = () => {

  const {
    register,
    handleSubmit
  } = useForm({ mode: 'all' })
  const navigate = useNavigate();


  const onFormSubmit = (data) => {
    const payload = { ...data };
    delete payload['confirmPassword'];

    if (data.password == data.confirmPassword) {
      userService.registerUser(payload).then(response => {
        console.log(response)
        if (response?.error)
          toast.error(response.error);
        else {
          toast.success("User created successfully");
          navigate('/home');
        }
      });
    }
    else
      toast.error("Password and confirm password does not match");  
  };

  return (
    <>
      <Navbar />

      <div className={`hero-main login-main`}>
        <div className="hero-content">
          <div className="hero-forms" style={{margin: "-180px"}}>
            <div className="bookingforms-main">  
              <div className="bf-card">
                <h4 style={{"font-size": "xxx-large", "padding-top": "10px"}}>Create an Account</h4>
                <p>It's free and always will be.</p>
                <form onSubmit={handleSubmit(onFormSubmit)} className="bf-form">
                  <div className="bf-row-single">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your First Name"
                      required
                      {...register("firstName")}
                    />
                  </div>
                  <div className="bf-row-single">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your Last Name"
                      required
                      {...register("lastName")}
                    />
                  </div>
                  <div className="bf-row-single">
                    <input
                      type="text"
                      id="nationality"
                      placeholder="Enter your Nationality"
                      required
                      {...register("nationality")}
                    />
                  </div>
                  <div className="bf-row">
                    <select id="idType" required {...register("idType")}>
                      <option value="" disabled selected>
                        Type of ID
                      </option>
                      <option value="Passport">Passport</option>
                      <option value="Driver's License">Driver's License</option>
                      <option value="Other Government Issued ID">
                        Other Government Issued ID
                      </option>
                    </select>
                    <input
                      type="text"
                      name="idNumber"
                      id="idNumber"
                      placeholder="Enter your ID number"
                      required
                      {...register("idNumber")}
                    />
                  </div>
                  <div className="bf-row-single">
                    <input
                      type="number"
                      id="phone"
                      placeholder="Enter your phone"
                      required
                      {...register("phone")}
                    />
                  </div>
                  <div className="bf-row-single">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      {...register("email")}
                    />
                  </div>

                  <div className="bf-row">
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your Password"
                      required
                      {...register("password")}
                    />
                      <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      required
                      {...register("confirmPassword")}
                    />
                  </div>
                  
                  <div className="bf-row-single">
                    <input 
                      type="submit" 
                      value="register" 
                      className="waves-effect waves-light btn-large full-btn" 
                    />
                  </div>
                        
                  <div className="bf-row-single">
                    <p>Are you a already registered ? <Link to="/login">Click to Login</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tips />
      <Footer />
    </>
  );
};

export default Register;
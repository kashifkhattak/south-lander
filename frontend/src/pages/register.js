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
      <div className="tr-register">
        <div className="tr-regi-form">
          <h4>Create an Account</h4>
          <p>It's free and always will be.</p>
          <form className="col s12" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="row">
              <div className="input-field col m6 s12">
                <input type="text" className="validate" {...register("firstName")} placeholder="First Name" required />
              </div>
              <div className="input-field col m6 s12">
                <input type="text" className="validate" {...register("lastName")} placeholder="Last Name" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="number" className="validate"  {...register("nationality")} placeholder="Nationality" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 bf-row-single">
                <select required  {...register("idType")}>
                  <option value="" disabled selected>
                    Type of ID
                  </option>
                  <option value="Passport">Passport</option>
                  <option value="Driver's License">Driver's License</option>
                  <option value="Other Government Issued ID">
                    Other Government Issued ID
                  </option>
                </select>
              </div>
              <div className="input-field col s6">
                <input type="number" className="validate" {...register("idNumber")} placeholder="Enter your ID number" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="number" className="validate"  {...register("phone")} placeholder="Enter your phone" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="email" className="validate"  {...register("email")} placeholder="Enter your email" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col m6 s12">
                <input type="password" className="validate"  {...register("password")} placeholder="Password" required />
              </div>
              <div className="input-field col m6 s12">
                <input type="password" className="validate"  {...register("confirmPassword")} placeholder="Confirm Password" required />
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
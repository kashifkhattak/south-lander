import React from "react";
import toast from "react-hot-toast";
import Tips from "../components/tips";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import userService from "../services/user-service";

const Login = () => {

  const {
    register,
    handleSubmit
  } = useForm({ mode: 'all' })
  const navigate = useNavigate();

  const onFormSubmit = (data) => {

    const payload = {
      ...data
    }

    userService.login(payload).then(response => {
      if (response?.error)
        toast.error(response.error);
      else {
        toast.success("Login successful");
        navigate('/home');
      }
    });

  };
  
  return (
    <>
      <Navbar />
      <div className="tr-register">
        <div className="tr-regi-form">
          <h4>Sign In</h4>
          <p>Explore Ecuador's most innovative<br />destination experience offer</p>
          <form className="col s12" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" placeholder="Email" {...register("email")} required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="password" className="validate" placeholder="Password" {...register("password")} required />
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

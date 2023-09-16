import inquiryService from "../services/inquiry-service";
import { React, useEffect, useState } from "react";
import {
  useForm,
  Controller
} from 'react-hook-form'

const Inquiry = () => {

  const {
    register,
    handleSubmit
  } = useForm({ mode: 'all' })


  const onFormSubmit = (data) => {
    const payload = {
      ...data,
      userId: '64fc81643f85792c6765217f'
    }
    inquiryService.createInquiry(payload).then(response =>
      console.log("submit sucessfully", response))
  }

  return (
    <>
      <div className="inquiry-main">
        <div className="inquiry-card">
          <h4>Submit Your Inquiry</h4>
          <p>Let us know</p>
          <span>We'll get back to you ASAP</span>
          <form onSubmit={handleSubmit(onFormSubmit)} >
            <div className="inquiry-row">
              <input type="text" id="firstname" placeholder="First Name" required             
                {...register("firstName")} />
              <input type="text" id="lastname" placeholder="Last Name" required {...register("lastName")}/>
            </div>
            <div className="inquiry-row">
              <input type="text" {...register("phoneNumber")} id="phoneNumber" placeholder="Phone Number" required />
              <input type="text"{...register("email")}  id="email" placeholder="Email" required />
            </div>
            <div className="inquiry-row">
              <select {...register("helpType")} id="helpType"  required>
                <option value="" disabled selected>
                  How may we help you?
                </option>
                <option value="All-Inclusive Packages">All-Inclusive Packages</option>
                <option value="Accommodation">Accommodation</option>
                <option value="Timesharing">Timesharing</option>
                <option value="Rentals">Rentals</option>
                <option value="Tours">Tours</option>
                <option value="Events">Events</option>
                <option value="Booking/Payment">Booking/Payment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="inquiry-row">
              <textarea
                id="message"
                rows="4"
                required
                {...register("message")}
              />
            </div>
            <div className="inquiry-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Inquiry;

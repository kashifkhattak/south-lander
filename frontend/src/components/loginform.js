import { React, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import bookingService from "../services/booking-service";
import toast from "react-hot-toast";

const LoginForm = () => {

  const { register, control, handleSubmit } = useForm({ mode: "all" });

  const onFormSubmit = (data) => {
    // const payload = {
    //   ...data,
    //   type: type,
    //   userId: "64fc81643f85792c6765217f",
    // };

    // const filteredPayload = Object.fromEntries(
    //   Object.entries(payload).filter(([key, value]) => value !== "")
    // );

    // bookingService.createBooking(filteredPayload).then((response) => {
    //   if (response.status === 201) {
    //     toast.success("Booking created sucessfully");
    //   } else {
    //     toast.error(response.response.data.error);
    //   }
    // });
  };

  return (
    <div className="bookingforms-main">  
      <div className="bf-card">
        <div className="bf-header">
          <p>All-Inclusive Vacation Packages</p>
          <span>
            Choose from the 9 perfect destination packages to travel around
            Ecuador and get the most out of your time and money.
          </span>
        </div>
        <form onSubmit={handleSubmit(onFormSubmit)} className="bf-form">
          <div className="bf-row-single">
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              required
              {...register("name")}
            />
          </div>
          <div className="bf-row-single">
            <input
              type="text"
              id="nationality"
              placeholder="Nationality"
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
          <div className="bf-row">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              {...register("email")}
            />
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone"
              required
              {...register("phone")}
            />
          </div>
          <div className="bf-row-single">
            <select id="package" required {...register("package")}>
              <option value="" disabled selected>
                Select your package
              </option>
              <option value="Galapagos: Island Hopping">
                Galapagos: Island Hopping
              </option>
              <option value="Galapagos: Isabela Island">
                Galapagos: Isabela Island
              </option>
              <option value="Coast: Beach Hopping">
                Coast: Beach Hopping
              </option>
              <option value="Andes: Quito & Beyond">
                Andes: Quito & Beyond
              </option>
              <option value="Andes: Cuenca & Beyond">
                Andes: Cuenca & Beyond
              </option>
              <option value="Amazonia: Cuyabeno">Amazonia: Cuyabeno</option>
              <option value="Summits: High Altitude Ecuador">
                Summits: High Altitude Ecuador
              </option>
              <option value="3 Worlds: Mainland Ecuador">
                3 Worlds: Mainland Ecuador
              </option>
              <option value="4 Worlds: Mainland Ecuador + Galapagos">
                4 Worlds: Mainland Ecuador + Galapagos
              </option>
            </select>
          </div>
          <div className="bf-row">
            <select
              id="adultsCount"
              name="adultsCount"
              required
              {...register("adultsCount")}
            >
              <option value="" disabled selected>
                No. of Adults
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6+">6+</option>
            </select>
            <select
              id="childrenCount"
              required
              {...register("childrenCount")}
            >
              <option value="" disabled selected>
                No. of Children
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6+">6+</option>
            </select>
          </div>
          <div className="in-out-header">
            <p>- Check In -</p>
            <p>- Check Out -</p>
          </div>
          <div className="bf-row-date">
            <input
              type="date"
              id="checkIn"
              required
              {...register("checkIn")}
            />
            <input
              type="date"
              id="checkOut"
              placeholder="Enter your Email"
              required
              {...register("checkOut")}
            />
          </div>
          <div className="bf-row">
            <button type="submit">Buy Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

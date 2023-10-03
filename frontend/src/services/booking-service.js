import axios from "./axios";

const createBooking = (data) => {
  return axios
    .post("/booking", data)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);
};

const bookingService = {
  createBooking,
};

export default bookingService;

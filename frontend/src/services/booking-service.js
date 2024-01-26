import axios from './axios';

const bookingPayment = (data) => {
  return axios
    .post('/booking/payment', data)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);
};

const createBooking = (data) => {
  return axios
    .post('/booking', data)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);
};

const updateBooking = (bookingId) => {
  const data = JSON.stringify({ status: 'Pending Approval' });

  return axios
    .put(`/booking/me/${bookingId}`, data)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);
}

const deleteBooking = (bookingId) => {
  return axios
    .delete(`/booking/me/${bookingId}`)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);
}

const bookingService = {
  createBooking,
  bookingPayment,
  updateBooking,
  deleteBooking
};

export default bookingService;

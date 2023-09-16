import axios from './axios'

const createBooking = (data) => {
	return axios.post('/booking', data).then(response => {
		return response.data
	})
}

const bookingService = {
	createBooking,
}

export default bookingService

import axios from './axios'

const getRentals = () => {
	return axios.get('/rental').then(response => {
		return response.data
	})
}

const rentalService = {
	getRentals
}

export default rentalService

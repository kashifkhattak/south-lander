import axios from './axios'

const getRentals = () => {
	return axios.get('/rental').then(response => {
		return response.data
	})
}
const getrentalDetail = () => {
	return axios.get('/rentalDetail').then(response => {
		return response.data
	})
}

const rentalService = {
	getRentals,
	getrentalDetail
}

export default rentalService

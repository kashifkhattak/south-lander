import axios from './axios'

const getTours = () => {
	return axios.get('/tour').then(response => {
		return response.data
	})
}
const getTourDetails = () => {
	return axios.get('/tourDetail').then(response => {
		return response.data
	})
}
const tourService = {
	getTours,
	getTourDetails
}

export default tourService

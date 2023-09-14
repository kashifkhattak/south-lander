import axios from './axios'

const getAccomodations = () => {
	return axios.get('/accommodation').then(response => {
		return response.data
	})
}

const getAccomodationDetails = () => {
	return axios.get('/accommodationDetail').then(response => {
		return response.data
	})
}

const accomodationService = {
	getAccomodations,
	getAccomodationDetails
}

export default accomodationService

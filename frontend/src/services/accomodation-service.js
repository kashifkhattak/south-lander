import axios from './axios'

const getAccomodations = () => {
	return axios.get('/accommodation').then(response => {
		return response.data
	})
}

const accomodationService = {
	getAccomodations
}

export default accomodationService

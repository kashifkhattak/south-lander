import axios from './axios'

const getTours = () => {
	return axios.get('/tour').then(response => {
		return response.data
	})
}

const tourService = {
	getTours
}

export default tourService

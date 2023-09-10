import axios from './axios'

const getPackages = () => {
	return axios.get('/package').then(response => {
		return response.data
	})
}

const packageService = {
	getPackages
}

export default packageService

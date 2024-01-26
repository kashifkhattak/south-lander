import axios from 'axios'
import { apiHost } from './host'

const login = (credentials, password) => {
	return axios
		.post(`${apiHost}/auth`, {
			user: { credentials, password }
		})
		.then(response => {
			return response.data
		})
}

const logout = (callback = () => console.log('store clear')) => {
	sessionStorage.clear()
}

const authService = {
	login,
	logout
}

export default authService

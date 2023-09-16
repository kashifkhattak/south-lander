import axios from 'axios'
import localForage from 'localforage'
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
	localForage.clear(callback)
}

const authService = {
	login,
	logout
}

export default authService

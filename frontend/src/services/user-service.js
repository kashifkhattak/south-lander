import axios from './axios'

const login = (data) => {
	return axios.post('/auth', data).then(response => {
		return response.status == 200 ? "" : response.response.data;
	})
}
const registerUser = (data) => {
	return axios.post('/user', data).then(response => {
		return response?.response?.data ? response.response.data : "";
	})
}
const userService = {
	login,
	registerUser
}

export default userService

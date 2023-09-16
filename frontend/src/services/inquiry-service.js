import axios from './axios'

const createInquiry = (data) => {
	return axios.post('/inquiry', data).then(response => {
		return response.data
	})
}

const inquiryService = {
	createInquiry,
}

export default inquiryService

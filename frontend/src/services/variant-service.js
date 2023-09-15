import axios from './axios'

const getPackageVariant = () => {
	return axios.get('/packageVariant').then(response => {
		return response.data
	})
}

const variantService = {
	getPackageVariant
}

export default variantService

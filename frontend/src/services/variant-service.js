import axios from './axios'

const getPackageVariant = () => {
	return axios.get('/packageVariant').then(response => {
		return response.data
	})
}
const getPackageVariantDetail = () => {
	return axios.get('/variantDetail').then(response => {
		return response.data
	})
}

const variantService = {
	getPackageVariant,
	getPackageVariantDetail
}

export default variantService

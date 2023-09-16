import { indexedStorageDB } from './local-forage'

export const getAuthHeader = async () => {
	let db = (await indexedStorageDB.getItem('persist:root')) 

	const jwt = JSON.parse(db, (key, value) => {
		if (typeof value === 'string') {
			return JSON.parse(value)
		}
		return value
	})?.auth?.jwt

	return jwt
}

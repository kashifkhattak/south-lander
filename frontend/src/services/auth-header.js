export const getAuthHeader = async () => {
	let token = sessionStorage.getItem('token');

	return token ? token : null;
}

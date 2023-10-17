let fallbackHost = 'southlander.travel'
let host = fallbackHost

let schemeForHttp = 'https://'

if (host === 'localhost:4000') {
	schemeForHttp = 'http://'
}

export const apiHost = schemeForHttp + host + '/api'

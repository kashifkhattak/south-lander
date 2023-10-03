let fallbackHost = 'localhost:4000'
let host = fallbackHost

let schemeForHttp = 'https://'

if (host === 'localhost:4000' || host === '35.245.107.23:4000') {
	schemeForHttp = 'http://'
}

export const apiHost = schemeForHttp + host + '/api'

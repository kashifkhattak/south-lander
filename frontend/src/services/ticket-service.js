import axios from './axios'

const getEventTickets = () => {
	return axios.get('/eventTicket').then(response => {
		return response.data
	})
}

const ticketService = {
	getEventTickets
}

export default ticketService

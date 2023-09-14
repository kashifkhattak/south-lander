import axios from './axios'

const getEventTickets = () => {
	return axios.get('/eventTicket').then(response => {
		return response.data
	})
}
const getEventTicketDetail = () => {
	return axios.get('/eventTicketDetail').then(response => {
		return response.data
	})
}
const ticketService = {
	getEventTickets,
	getEventTicketDetail
}

export default ticketService

import axios from './axios'

const getEventPlannings = () => {
	return axios.get('/eventPlanning').then(response => {
		return response.data
	})
}

const getEventPlanningDetail = () => {
    return axios.get('/eventPlanningDetail').then(response => {
        return response.data
    })
}

const eventService = {
	getEventPlannings,
    getEventPlanningDetail
}

export default eventService
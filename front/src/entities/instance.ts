import axios from 'axios'
let token = () => window.localStorage.getItem('token')
export default (tkn = token()) =>
	axios.create({
		baseURL: import.meta.env.VITE_API,
		headers: { Authorization: `Bearer ${tkn}` }
	})

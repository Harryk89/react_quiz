import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-c978f.firebaseio.com/'
})
import axios from 'axios'

export default {
  userLogin(payload) {
    return axios.post('/auth/login', payload)
  }
}

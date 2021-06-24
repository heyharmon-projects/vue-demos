import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://cms.test/api',
    // baseURL: 'https://sitemap.bloomcu.com/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    index() {
        return apiClient.get('/types')
    }
}

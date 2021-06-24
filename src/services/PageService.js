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
    index(params = {}) {
        return apiClient.get('/companies/redwood/pages', params)
    },

    store(page = {}) {
        return apiClient.post('/companies/redwood/pages', page)
    },

    update(page_id, request = {}) {
        return apiClient.put('/companies/redwood/pages/' + page_id, request)
    },

    updatePagesBatch(request = {}) {
        return apiClient.put('/companies/redwood/pages-update-batch', request)
    }
}

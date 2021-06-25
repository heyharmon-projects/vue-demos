import { ref, computed } from 'vue'
import axios from 'axios'

/**
 * Setup Cors Proxy
 * This uses Cors-Anywhere to enable cross-origin requests
 */
const corsProxy = 'https://cors-api-proxy.herokuapp.com/'

// Initialize Axios
const apiClient = axios.create({
    baseURL: corsProxy + 'https://www.fuzeqna.com/rcusupport/services/v1/kb.svc/JSON/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default function useFuze() {
    const results = ref()

    async function search(query = '') {
        if (query) {
            apiClient.get('SearchAnon', {
                params: {
                    startIndex: 1,
                    pageLength: 10,
                    searchWords: query
                }
            })
            .then((response) => {
                results.value = response.data.d
            })
        } else {
            results.value = undefined
        }
    }

    return {
        // States
        results: computed(() => results.value),

        // Methods
        search,
    }
}

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
    const item = ref()
    const loading = ref(false)

    async function search(query = '', startIndex = 1, pageLength = 20) {
        if (query) {
            // Set loading
            loading.value = true

            // Search Fuze
            apiClient.get('SearchAnon', {
                params: {
                    searchWords: query,
                    startIndex: startIndex,
                    pageLength: pageLength
                }
            })
            .then((response) => {
                loading.value = false
                results.value = response.data.d
            })
        } else {
            results.value = undefined
        }
    }

    async function getItem(kbid = '') {
        // Set loading
        loading.value = true

        // Search Fuze
        apiClient.get('GetAnon', {
            params: {
                kbid: kbid
            }
        })
        .then((response) => {
            loading.value = false
            item.value = response.data.d
        })
    }

    return {
        // States
        results: computed(() => results.value),
        item: computed(() => item.value),
        loading: computed(() => loading.value),

        // Methods
        search,
        getItem
    }
}

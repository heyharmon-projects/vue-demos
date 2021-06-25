import { ref, computed } from 'vue'
import axios from 'axios'

// Initialize Axios
const apiClient = axios.create({
    baseURL: 'https://www.fuzeqna.com/rcusupport/services/v1/kb.svc/JSON/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export default function useFuze() {
    const results = ref()

    async function search(query = '') {
        if (query) {
            apiClient.get('SearchAnon?searchWords=' + query)
            .then((response) => {
                results.value = response.d
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

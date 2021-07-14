import { ref, computed } from 'vue'

// Import Algolia
import algoliasearch from 'algoliasearch/lite'

// Initialize Algolia
const algoliaClient = algoliasearch('XA10UKG343', '66a74aa6003f942271c2909ab1d8843f');
const algoliaIndex = algoliaClient.initIndex('hoo_searchable_posts');

export default function useAlgolia() {
    const results = ref()
    const loading = ref(false)

    async function search(query = '', page = 1, hitsPerPage = 20) {
        if (query) {
            // Set loading
            loading.value = true

            // Search Algolia
            algoliaIndex.search(query, {
                page: page,
                hitsPerPage: hitsPerPage
            })
            .then(({ hits }) => {
                loading.value = false
                results.value = hits
            })
        } else {
            results.value = undefined
        }
    }

    return {
        // States
        results: computed(() => results.value),
        loading: computed(() => loading.value),

        // Methods
        search,
    }
}

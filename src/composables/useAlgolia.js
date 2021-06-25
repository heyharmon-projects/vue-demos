import { ref, computed } from 'vue'

// Import Algolia
import algoliasearch from 'algoliasearch/lite'

// Initialize Algolia
const algoliaClient = algoliasearch('XA10UKG343', '66a74aa6003f942271c2909ab1d8843f');
const algoliaIndex = algoliaClient.initIndex('yolo_posts_page');

export default function useAlgolia() {
    const results = ref()

    async function search(query = '') {
        if (query) {
            algoliaIndex.search(query)
                .then(({ hits }) => {
                    results.value = hits
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

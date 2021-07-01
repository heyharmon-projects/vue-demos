<template>
    <layout-default>
        <!-- Header -->
        <h3 class="margin-bottom-sm">Algolia + Fuze</h3>
        <app-tabs/>

        Work in progress
    </layout-default>
</template>

<script>
import { ref, watch } from 'vue'

// Components
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import AppInput from '@/components/forms/AppInput.vue'

// Composables
import algolia from '@/composables/useAlgolia'

export default {
    setup() {
        const query = ref()
        const { results, search } = algolia()

        watch(query, (query = '') => {
            search(query)
        })

        return {
            query,
            results
        }
    },

    components: {
        LayoutDefault,
        AppTabs,
        AppInput
    }
}
</script>

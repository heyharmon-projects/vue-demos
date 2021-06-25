<template>
    <layout-default>
        <h3 class="margin-bottom-sm">Algolia + Fuze</h3>

        <app-tabs/>

        WIP
        <!-- <app-input v-model="query" placeholder="Search..."/>

        <ul v-if="results" class="border radius-md shadow-sm margin-y-sm">
            <li v-for="result in results" class="text-sm padding-sm border-bottom">
                {{ result.post_title }}
            </li>
        </ul> -->
    </layout-default>
</template>

<script>
import { ref, watch } from 'vue'

// Components
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import AppInput from '@/components/forms/AppInput.vue'

// Composables
import useAlgolia from '@/composables/useAlgolia'

export default {
    setup() {
        const query = ref()
        const { results, search } = useAlgolia()

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
};
</script>

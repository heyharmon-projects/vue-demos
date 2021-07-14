<template>
    <layout-default>
        <!-- Header -->
        <h3 class="margin-bottom-sm">Algolia</h3>
        <app-tabs/>

        <!-- Search input -->
        <app-input v-model="query" placeholder="Search..."/>

        <div v-if="results">
            <!-- Results container -->
            <div class="flex margin-y-md">
                <!-- Left -->
                <div class="width-80%">
                    <!-- Results meta -->
                    <p class="text-sm margin-bottom-md">{{ results.length }} <strong>Algolia</strong> results for "{{ query }}"</p>

                    <!-- Results list -->
                    <div class="border radius-md shadow-sm">
                        <router-link v-for="result in results" to="" class="flex justify-between align-center reset text-decoration-none text-sm padding-sm border-bottom">
                            {{ result.post_title }}
                            <small>{{ transformations.capitalize(result.post_type) }}</small>
                        </router-link>
                    </div>
                </div>

                <!-- Right -->
                <div class="width-20% padding-left-lg">
                    <app-filters/>
                </div>
            </div>
        </div>
    </layout-default>
</template>

<script>
import { ref, reactive, watch } from 'vue'

// Components
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import AppInput from '@/components/forms/AppInput.vue'
import AppFilters from '@/components/filters/AppFilters.vue'

// Composables
import algolia from '@/composables/useAlgolia'
import filters from '@/composables/utilities/useFilters'
import transformations from '@/composables/utilities/useTransformations'

export default {
    setup() {
        const query = ref()
        // const selectedFilters = reactive({ categories: [], types: [] })
        const selectedFilters = reactive({ categories: '', types: '' })
        const { search, results } = algolia()

        watch(query, (query = '') => {
            search(query)
        })

        query.value = 'loan'

        return {
            query,
            results,
            selectedFilters,
            transformations
        }
    },

    components: {
        LayoutDefault,
        AppTabs,
        AppInput,
        AppFilters
    }
}
</script>

<style lang="scss" scoped>
.result {
    &:hover {
    	background-color: var(--color-contrast-lower);
    }
}
</style>

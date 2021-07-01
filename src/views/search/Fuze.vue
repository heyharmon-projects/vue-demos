<template>
    <layout-default>
        <!-- Header -->
        <h3 class="margin-bottom-sm">Fuze</h3>
        <app-tabs/>

        <!-- Search input -->
        <app-input v-model="query" placeholder="Search..."/>

        <!-- Loader -->
        <app-skeleton v-if="loading"/>

        <div v-if="results && !loading">
            <!-- Results meta -->
            <p class="text-sm margin-y-sm">{{ results.length }} results for "{{ query }}"</p>

            <!-- Results container -->
            <div class="flex">
                <!-- Left -->
                <div class="width-80%">
                    <!-- Results list -->
                    <div class="border radius-md shadow-sm">
                        <router-link v-for="result in results" :to="{ name: 'fuze-item', params: { kbid: result.KBID } }" class="result flex justify-between align-center reset text-decoration-none text-sm padding-sm border-bottom">
                            {{ result.Question }}
                            <small v-html="result.Categories[0].CategoryName"></small>
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
import { ref, watch } from 'vue'

// Components
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import AppInput from '@/components/forms/AppInput.vue'
import AppSkeleton from '@/components/loader/AppSkeleton.vue'
import AppFilters from '@/components/filters/AppFilters.vue'

// Composables
import fuze from '@/composables/useFuze'

export default {
    setup() {
        const query = ref()
        const { search, results, loading } = fuze()

        watch(query, (query = '') => {
            search(query)
        })

        return {
            query,
            results,
            loading
        }
    },

    components: {
        LayoutDefault,
        AppTabs,
        AppInput,
        AppSkeleton,
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

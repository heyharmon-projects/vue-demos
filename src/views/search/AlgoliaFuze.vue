<template>
    <layout-default>
        <!-- Header -->
        <h3 class="margin-bottom-sm">Algolia + Fuze</h3>
        <app-tabs/>

        <!-- Search input -->
        <app-input v-model="query" placeholder="Search..."/>

        <div v-if="resultsAlgolia || resultsFuze">
            <!-- Results container -->
            <div class="flex margin-y-md">
                <!-- Left -->
                <div class="width-80%">
                    <!-- Algolia results -->
                    <div v-if="resultsAlgolia" class="margin-bottom-md">
                        <!-- Results meta -->
                        <p class="text-sm margin-bottom-sm">{{ resultsAlgolia.length }} <strong>Algolia</strong> results for "{{ query }}"</p>

                        <!-- Results list -->
                        <div class="grid gap-xs">
                            <router-link v-for="result in resultsAlgolia" to="" class="flex col-6 border radius-md shadow-sm reset text-decoration-none">
                                <figure class="flex items-center justify-center bg-contrast-lower width-xxl height-xxl radius-md radius-top-right-0 radius-bottom-right-0">
                                    <svg class="width-40%" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><rect x="1" y="2" width="22" height="20"></rect><line x1="1" y1="6" x2="23" y2="6"></line><rect x="5" y="11" width="6" height="6"></rect> <line x1="15" y1="11" x2="19" y2="11"></line> <line x1="15" y1="15" x2="17" y2="15"></line><line x1="6" y1="2" x2="6" y2="6"></line></g></svg>
                                </figure>
                                <div class="padding-sm">
                                    <h4 class="text-base margin-bottom-xxs">{{ transformations.trim(result.post_title, 28) }}</h4>
                                    <small>{{ transformations.capitalize(result.post_type) }}</small>
                                </div>
                            </router-link>
                        </div>
                    </div>

                    <!-- Fuze results -->
                    <app-skeleton v-if="loadingFuze"/>
                    <div v-else>
                        <!-- Results meta -->
                        <p class="text-sm margin-bottom-md">{{ resultsFuze.length }} <strong>Fuze</strong> results for "{{ query }}"</p>

                        <!-- Results list -->
                        <div class="grid gap-xs">
                            <router-link v-for="result in resultsFuze" :to="{ name: 'fuze-item', params: { kbid: result.KBID } }" class="flex col-6 border radius-md shadow-sm reset text-decoration-none">
                                <figure class="flex items-center justify-center bg-contrast-lower width-xxl height-xxl radius-md radius-top-right-0 radius-bottom-right-0">
                                    <svg class="width-40%" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M7,22H3a2,2,0,0,1-2-2V2H9l3,4H23V20a2,2,0,0,1-2,2H17"></path><circle cx="12" cy="22" r="1" stroke="none" fill="currentColor"></circle><path d="M9.853,10.56c1.98-.875,4.542-.771,5.417.645s.271,3.063-1.229,4.334S12,17.5,12,18.5"></path></g></svg>
                                </figure>
                                <div class="padding-sm">
                                    <h4 class="text-base margin-bottom-xxs">{{ transformations.trim(result.Question, 28) }}</h4>
                                    <small v-html="result.Categories[0].CategoryName"></small>
                                </div>
                            </router-link>
                        </div>
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
import AppSkeleton from '@/components/loader/AppSkeleton.vue'
import AppFilters from '@/components/filters/AppFilters.vue'

// Composables
import algolia from '@/composables/useAlgolia'
import fuze from '@/composables/useFuze'
import filters from '@/composables/utilities/useFilters'
import transformations from '@/composables/utilities/useTransformations'

export default {
    setup() {
        const query = ref()
        const { search: searchAlgolia, results: resultsAlgolia } = algolia()
        const { search: searchFuze, results: resultsFuze, loading: loadingFuze } = fuze()

        watch(query, (query = '') => {
            searchAlgolia(query, 1, 4)
            searchFuze(query, 1, 4)
        })

        query.value = 'loan'

        return {
            query,
            resultsAlgolia,
            resultsFuze,
            loadingFuze,
            transformations
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

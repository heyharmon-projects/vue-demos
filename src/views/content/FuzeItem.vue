<template>
    <layout-default>
        <!-- Header -->
        <router-link :to="{ name: 'algolia-fuze' }" class="btn btn--primary margin-bottom-sm">Back</router-link>

        <!-- Loader -->
        <app-skeleton v-if="loading"/>

        <div v-if="!loading" class="reset">
            <!-- Item title -->
            <h3 class="margin-y-sm color-black">{{ item.Question }}</h3>

            <!-- Meta -->
            <div class="text-component">
                <p class="text-sm">Category: {{ item.Categories[0].CategoryName }}</p>
                <p class="text-sm">Author: {{ item.CreatedBy }}</p>
                <hr>
            </div>

            <!-- Content -->
            <div v-html="item.Answer" class="text-component color-black margin-y-lg"></div>

            <!-- Related content -->
            <div v-if="item.RelatedItems.length" class="margin-y-sm">
                <!-- Title -->
                <div class="text-component margin-bottom-sm">
                    <hr>
                    <p class="text-md text-bold">Related Items</p>
                </div>

                <!-- Items -->
                <div class="border radius-md shadow-sm ">
                    <router-link v-for="item in item.RelatedItems" :to="{ name: 'fuze-item', params: { kbid: item.KBID } }" class="result flex align-center reset text-decoration-none text-sm padding-sm border-bottom">
                        {{ item.Question }}
                    </router-link>
                </div>
            </div>
        </div>
    </layout-default>
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

// Components
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import AppSkeleton from '@/components/loader/AppSkeleton.vue'

// Composables
import fuze from '@/composables/useFuze'

export default {
    setup() {
        const route = useRoute()
        const { getItem, item, loading } = fuze()

        getItem(route.params.kbid)

        watch(() => route.params.kbid, (kbid) => {
            getItem(kbid)
        })

        return {
            item,
            loading
        }
    },

    components: {
        LayoutDefault,
        AppSkeleton
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

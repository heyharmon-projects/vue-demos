<template>
    <layout-columns>

        <div class="margin-bottom-md">
          <h1 class="text-lg">Architecture</h1>
        </div>

        <app-tabs />

        <div class="module">
            <div class="module__column--left">
                <menu-filters :categories="categories" />
            </div>
            <div class="module__column--right">
                <app-cards-list />
            </div>
        </div>

    </layout-columns>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutColumns from '@/layouts/LayoutColumns.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import MenuFilters from '@/components/menu/MenuFilters.vue'
import AppCardsList from '@/components/lists/AppCardsList.vue'

export default defineComponent({
    name: 'Sitemap',

    components: {
        LayoutColumns,
        AppTabs,
        MenuFilters,
        AppCardsList
    },

    data() {
        return {
            categories: [
                {
                    'id': 1,
                    'title': 'Category 1',
                    'children': [
                        {
                            'id': 2,
                            'title': 'Category 2',
                            'children': []
                        },
                        {
                            'id': 3,
                            'title': 'Category 3',
                            'children': []
                        }
                    ]
                },
                {
                    'id': 4,
                    'title': 'Category 4',
                    'children': []
                },
                {
                    'id': 5,
                    'title': 'Category 5',
                    'children': [
                        {
                            'id': 6,
                            'title': 'Category 6',
                            'children': [
                                {
                                    'id': 7,
                                    'title': 'Category 7',
                                    'children': [
                                        {
                                            'id': 8,
                                            'title': 'Category 8',
                                            'children': []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
});
</script>

<style lang="scss">
.module {
    display: flex;
    width: 100%;

    .module__column--left {
        width: 300px;
        margin-right: 40px;
    }

    .module__column--right {
        width: 100%;
    }
}
</style>

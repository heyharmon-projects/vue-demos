<template>
    <nav class="space-y-1">
        <!-- All button -->
        <div class="space-y-1">
            <a
                href=""
                @click.prevent="clearFilter()"
                :class="selectedFilters['category'] == undefined ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-bold rounded-md hover:text-indigo-600 hover:bg-indigo-100"
            >
                <span class="truncate">All Categories</span>
            </a>
        </div>

        <!-- Category buttons -->
        <div
            v-for="category in categories"
            :key="category.id"
            class="space-y-1"
        >
            <a
                href=""
                @click.prevent="activateFilter('category', category.id), selectCategory(category.id)"
                :class="selectedFilters['category'] == category.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-bold rounded-md hover:text-indigo-600 hover:bg-indigo-100"
            >
                {{ category.title }}
                <svg v-if="category.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </a>

            <!-- Children -->
            <div
                v-show="selectedCategories.includes(category.id)"
                v-if="category.children"
                v-for="child in category.children"
                :key="child.id"
                class="space-y-1"
            >
                <a
                    href=""
                    @click.prevent="activateFilter('category', child.id), selectCategory(child.id)"
                    :class="selectedFilters['category'] == child.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                    class="group w-full flex items-center pl-6 pr-1 py-2 text-sm font-bold rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                >
                    {{ child.title }}
                    <svg v-if="child.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </a>

                <!-- Grandchildren -->
                <div
                    v-show="selectedCategories.includes(child.id)"
                    v-if="child.children"
                    v-for="grandchild in child.children"
                    :key="grandchild.id"
                    class="space-y-1"
                >
                    <a
                        href=""
                        @click.prevent="activateFilter('category', grandchild.id), selectCategory(grandchild.id)"
                        :class="selectedFilters['category'] == grandchild.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                        class="group w-full flex items-center pl-10 pr-1 py-2 text-sm font-medium rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                    >
                        {{ grandchild.title }}
                        <svg v-if="grandchild.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </a>

                    <!-- Great Grandchildren -->
                    <div
                        v-show="selectedCategories.includes(grandchild.id)"
                        v-if="grandchild.children"
                        v-for="great in grandchild.children"
                        :key="great.id"
                        class="space-y-1"
                    >
                        <a
                            href=""
                            @click.prevent="activateFilter('category', great.id)"
                            :class="selectedFilters['category'] == great.id ? 'bg-indigo-600 text-white' : 'text-gray-900'"
                            class="group w-full flex items-center pl-14 pr-1 py-2 text-sm font-normal rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                        >
                            {{ great.title }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { omit, isEmpty } from 'lodash'
import { Category } from '@/types'
import CategoryService from '@/services/CategoryService.js'

export default defineComponent({
    name: 'CategoriesMenu',

    data() {
        return {
            categories: [] as Category[],
            selectedCategories: [],
            selectedFilters: omit(this.$route.query, ['page'])
        }
    },

    computed: {
        filtersInUse(): Boolean {
            return !isEmpty(this.selectedFilters)
        }
    },

    methods: {
        selectCategory(id) {
            const index = this.selectedCategories.indexOf(id);
            if (index > -1) {
                this.selectedCategories.splice(index, 1)
            } else {
                this.selectedCategories.push(id)
            }
        },

        activateFilter(key, value) {
            this.selectedFilters = Object.assign({}, this.selectedFilters, { [key]: value })
            this.updateQueryString()
        },

        clearFilter() {
            this.selectedFilters = _.omit(this.selectedFilters, 'category')
            this.updateQueryString()
        },

        // clearAllFilters() {
        //     this.selectedFilters = {}
        //     this.$router.replace({ query: {} })
        // },

        updateQueryString() {
            this.$router.replace({
                query: {
                    ...this.selectedFilters,
                    // page: 1
                }
            })
        }
    },

    mounted() {
        CategoryService.index()
            .then(response => {
                this.categories = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
});
</script>

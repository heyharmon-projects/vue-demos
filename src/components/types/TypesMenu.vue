<template>
    <nav class="space-y-1">
        <!-- All button -->
        <div class="space-y-1">
            <a
                href=""
                @click.prevent="clearFilter()"
                :class="selectedFilters['type'] == undefined ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-bold rounded-md hover:text-indigo-600 hover:bg-indigo-100"
            >
                <span class="truncate">All Types</span>
            </a>
        </div>

        <!-- Type buttons -->
        <div
            v-for="type in types"
            :key="type.id"
            class="space-y-1"
        >
            <a
                href=""
                @click.prevent="activateFilter('type', type.id), selectType(type.id)"
                :class="selectedFilters['type'] == type.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-bold rounded-md hover:text-indigo-600 hover:bg-indigo-100"
            >
                {{ type.title }}
                <svg v-if="type.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </a>

            <!-- Children -->
            <div
                v-show="selectedTypes.includes(type.id)"
                v-if="type.children"
                v-for="child in type.children"
                :key="child.id"
                class="space-y-1"
            >
                <a
                    href=""
                    @click.prevent="activateFilter('type', child.id), selectType(child.id)"
                    :class="selectedFilters['type'] == child.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                    class="group w-full flex items-center pl-6 pr-1 py-2 text-sm font-bold rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                >
                    {{ child.title }}
                    <svg v-if="child.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </a>

                <!-- Grandchildren -->
                <div
                    v-show="selectedTypes.includes(child.id)"
                    v-if="child.children"
                    v-for="grandchild in child.children"
                    :key="grandchild.id"
                    class="space-y-1"
                >
                    <a
                        href=""
                        @click.prevent="activateFilter('type', grandchild.id), selectType(grandchild.id)"
                        :class="selectedFilters['type'] == grandchild.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                        class="group w-full flex items-center pl-10 pr-1 py-2 text-sm font-medium rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                    >
                        {{ grandchild.title }}
                        <svg v-if="grandchild.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </a>

                    <!-- Great Grandchildren -->
                    <div
                        v-show="selectedTypes.includes(grandchild.id)"
                        v-if="grandchild.children"
                        v-for="great in grandchild.children"
                        :key="great.id"
                        class="space-y-1"
                    >
                        <a
                            href=""
                            @click.prevent="activateFilter('type', great.id)"
                            :class="selectedFilters['type'] == great.id ? 'bg-indigo-600 text-white' : 'text-gray-900'"
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
import TypeService from '@/services/TypeService.js'

export default defineComponent({
    name: 'TypesMenu',

    data() {
        return {
            types: [],
            selectedTypes: [],
            selectedFilters: omit(this.$route.query, ['page'])
        }
    },

    computed: {
        filtersInUse(): Boolean {
            return !isEmpty(this.selectedFilters)
        }
    },

    methods: {
        selectType(id) {
            const index = this.selectedTypes.indexOf(id);
            if (index > -1) {
                this.selectedTypes.splice(index, 1)
            } else {
                this.selectedTypes.push(id)
            }
        },

        activateFilter(key, value) {
            this.selectedFilters = Object.assign({}, this.selectedFilters, { [key]: value })
            this.updateQueryString()
        },

        clearFilter() {
            this.selectedFilters = _.omit(this.selectedFilters, 'type')
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
        TypeService.index()
            .then(response => {
                this.types = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
});
</script>

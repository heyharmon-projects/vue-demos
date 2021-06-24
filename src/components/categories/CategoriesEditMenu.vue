<template>
    <div>
        <nav class="space-y-1">
            <!-- Category buttons -->
            <div
                v-for="category in categories"
                :key="category.id"
                class="space-y-1"
            >
                <a
                    href=""
                    @click.prevent="openCategory(category.id), selectCategory(category.id)"
                    :class="selectedCategory == category.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                    class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-bold text-gray-900 rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                >
                    {{ category.title }}
                    <svg v-if="category.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </a>

                <!-- Children -->
                <div
                    v-show="openCategories.includes(category.id)"
                    v-if="category.children"
                    v-for="child in category.children"
                    :key="child.id"
                    class="space-y-1"
                >
                    <a
                        href=""
                        @click.prevent="openCategory(child.id), selectCategory(child.id)"
                        :class="selectedCategory == child.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                        class="group w-full flex items-center pl-6 pr-1 py-2 text-sm font-bold text-gray-900 rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                    >
                        {{ child.title }}
                        <svg v-if="child.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </a>

                    <!-- Grandchildren -->
                    <div
                        v-show="openCategories.includes(child.id)"
                        v-if="child.children"
                        v-for="grandchild in child.children"
                        :key="grandchild.id"
                        class="space-y-1"
                    >
                        <a
                            href=""
                            @click.prevent="openCategory(grandchild.id), selectCategory(grandchild.id)"
                            :class="selectedCategory == grandchild.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                            class="group w-full flex items-center pl-10 pr-1 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                        >
                            {{ grandchild.title }}
                            <svg v-if="grandchild.children.length" class="text-gray-400 _rotate-90 ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </a>

                        <!-- Great Grandchildren -->
                        <div
                            v-show="openCategories.includes(grandchild.id)"
                            v-if="grandchild.children"
                            v-for="great in grandchild.children"
                            :key="great.id"
                            class="space-y-1"
                        >
                            <a
                                href=""
                                @click.prevent="openCategory(great.id), selectCategory(great.id)"
                                :class="selectedCategory == great.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
                                class="group w-full flex items-center pl-14 pr-1 py-2 text-sm font-normal text-gray-900 rounded-md hover:text-indigo-600 hover:bg-indigo-100"
                            >
                                {{ great.title }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </nav>

        <div class="mt-6">
            <!-- Submit button -->
            <button
                  v-if="!selectedCategory"
                  disabled
                  type="submit"
                  class="cursor-default w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Please select a Category
            </button>
            <button
                  v-else
                  @click="updatePagesBatch()"
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Update Category
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { omit, isEmpty } from 'lodash'
import { Category } from '@/types'
import PageService from '@/services/PageService.js'
import CategoryService from '@/services/CategoryService.js'

export default defineComponent({
    name: 'CategoriesExpandedMenu',

    data() {
        return {
            categories: [] as Category[],
            openCategories: [],
            selectedCategory: null
        }
    },

    methods: {
        openCategory(id) {
            const index = this.openCategories.indexOf(id);
            if (index > -1) {
                this.openCategories.splice(index, 1)
            } else {
                this.openCategories.push(id)
            }
        },

        selectCategory(id) {
            this.selectedCategory = id
        },

        updatePagesBatch() {
            PageService.updatePagesBatch({
                page_ids: this.$store.state.selectedPages,
                category_id: this.selectedCategory
            })
            .then(response => {
                this.$emit('batchUpdated')
            }).catch(error => {
                console.log(error);
            });
        }
    },

    mounted() {
        setTimeout(function () {
            CategoryService.index()
                .then(response => {
                    this.categories = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }.bind(this), 1000)
    }
});
</script>

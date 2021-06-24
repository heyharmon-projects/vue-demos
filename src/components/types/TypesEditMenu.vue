<template>
    <div>
        <nav class="space-y-1">
            <!-- Type buttons -->
            <div
                v-for="type in types"
                :key="type.id"
                class="space-y-1"
            >
                <a
                    href=""
                    @click.prevent="openType(type.id), selectType(type.id)"
                    :class="selectedType == type.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
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
                        @click.prevent="openType(child.id), selectType(child.id)"
                        :class="selectedType == child.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
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
                            @click.prevent="openType(grandchild.id), selectType(grandchild.id)"
                            :class="selectedType == grandchild.id ? 'bg-indigo-100 text-indigo-600' : 'text-gray-900'"
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
                                @click.prevent="openType(great.id)"
                                :class="selectedType == great.id ? 'bg-indigo-600 text-white' : 'text-gray-900'"
                                class="group w-full flex items-center pl-14 pr-1 py-2 text-sm font-normal rounded-md hover:text-indigo-600 hover:bg-indigo-100"
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
                  v-if="!selectedType"
                  disabled
                  type="submit"
                  class="cursor-default w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Please select a Type
            </button>
            <button
                  v-else
                  @click="updatePagesBatch()"
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Update Type
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { omit, isEmpty } from 'lodash'
import PageService from '@/services/PageService.js'
import TypeService from '@/services/TypeService.js'

export default defineComponent({
    name: 'TypesEditMenu',

    data() {
        return {
            types: [],
            openTypes: [],
            selectedType: null
        }
    },

    methods: {
        openType(id) {
            const index = this.openTypes.indexOf(id);
            if (index > -1) {
                this.openTypes.splice(index, 1)
            } else {
                this.openTypes.push(id)
            }
        },

        selectType(id) {
            this.selectedType = id
        },

        updatePagesBatch() {
            PageService.updatePagesBatch({
                page_ids: this.$store.state.selectedPages,
                type_id: this.selectedType
            })
            .then(response => {
                this.$emit('batchUpdated')
            }).catch(error => {
                console.log(error);
            });
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

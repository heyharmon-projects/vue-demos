<template>
    <!-- Title -->
    <div class="flex justify-between items-center mb-5 h-8">
        <!-- Counts -->
        <span class="relative z-0 inline-flex shadow-sm rounded-md">
          <span class="-ml-px relative inline-flex items-center px-3 py-2 rounded border border-gray-300 bg-white text-sm font-medium text-gray-900">
            {{ pages.length }} Pages
          </span>
          <button v-if="selectedPages.length" @click="clearSelectedPages()" type="button" class="-ml-1 relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            {{ selectedPages.length }} Selected
            <svg class="ml-2 h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>

        <!-- <div class="mt-0">
            <nav class="flex space-x-2">
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200 bg-gray-200">
                All Types
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                Product
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                Service
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                Feature
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                Info
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                Index
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                Form
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                Document
              </a>
              <a href="#" class="px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                FAQ
              </a>
            </nav>
        </div> -->

        <div class="flex items-center space-x-3">
            <!-- Edit category button -->
            <button v-if="selectedPages.length" @click="toggleEditPanel()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>

            <!-- Add page button -->
            <button @click="toggleAddPagePanel()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md border border-gray-300 text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg class="-ml-1 mr-2 h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Page
            </button>
        </div>
    </div>

    <!-- Table -->
    <div class="bg-white shadow overflow-hidden rounded-md mb-10">
      <ul class="divide-y divide-gray-200">
        <li
            @click="selectPage(page.id)"
            v-for="page in pages"
            :key="page.id"
            class="block cursor-pointer hover:bg-gray-50"
        >
            <div class="flex items-center px-6">
              <div class="flex-1 flex justify-between items-center min-w-0">
                <!-- Left -->
                <div class="flex flex-grow items-center py-5">
                    <!-- Checkbox -->
                    <label class="flex text-sm cursor-pointer">
                      <input :checked="selectedPages.includes(page.id)" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded border-gray-300 cursor-pointer">
                    </label>

                    <!-- Title & URL -->
                    <div class="max-w-5xl ml-5">
                      <div
                        @click.stop="title_editing = page.id; title_edited = page.title"
                        class="flex items-center space-x-1 group text-md font-medium text-indigo-600"
                      >
                        <!-- Title input -->
                        <input
                            v-focus
                            v-if="title_editing == page.id"
                            v-model="title_edited"
                            @blur="title_editing = null; updatePage(page.id)"
                            @keyup.enter="$event.target.blur()"
                            type="text"
                            class="block w-full shadow-sm rounded-md border border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        >

                        <!-- Title -->
                        <p v-else>{{ page.title }}</p>

                        <!-- Edit icon -->
                        <svg v-if="!title_editing" class="-ml-1 mr-2 h-5 w-5 transition duration-200 ease-out-in opacity-0 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div class="flex mt-2">
                        <div v-if="page.old_url"  class="flex items-center space-x-1 text-sm text-gray-500 truncate">
                          <!-- Url -->
                          <a @click.stop :href="page.old_url" target="_blank" class="hover:underline">{{ page.old_url }}</a>

                          <!-- Url icon -->
                          <svg class="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                </div>

                <!-- Category -->
                <div class="flex-shrink-0 justify-self-end">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-600 hover:text-white">
                      {{ page.category.title }}
                    </span>
                </div>

                <div class="ml-2 flex-shrink-0 justify-self-end">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-600 hover:text-white">
                      {{ page.type.title }}
                    </span>
                </div>

              </div>
            </div>
        </li>
      </ul>
    </div>

    <!-- Edit Slideout -->
    <div
        v-show="panel_edit_open"
        class="fixed inset-0 overflow-hidden"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Overlay -->
        <div @click="toggleEditPanel()" class="absolute inset-0 bg-gray-900 opacity-50 transition-opacity cursor-pointer" aria-hidden="true"></div>

        <!-- Modal body wrapper -->
        <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div
            :class="panel_edit_open ? 'translate-x-0' : 'translate-x-full'"
            class="w-screen max-w-md transform transition ease-in-out duration-500"
          >
            <div class="h-full flex flex-col py-4 bg-white shadow-xl overflow-y-scroll">
              <div class="px-4">
                <div class="flex items-center justify-between">
                  <!-- Title -->
                  <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">
                      {{ selectedPages.length > 1 ? 'Edit Pages' : 'Edit Page' }}
                  </h2>

                  <!-- Close button -->
                  <button @click="toggleEditPanel()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Close
                  </button>
                </div>
              </div>

              <!-- Content -->
              <div class="mt-6 relative flex-1 px-4 sm:px-6">
                <!-- Tabs -->
                <nav class="flex mb-6 border-b border-gray-200" aria-label="Tabs">
                    <a
                        v-for="tab in panel_edit_tabs"
                        :key="tab"
                        @click.prevent="panel_edit_active_tab = tab"
                        :class="panel_edit_active_tab == tab ? 'border-indigo-500 text-indigo-600' : ''"
                        class="flex-grow w-1/4 py-4 px-1 text-center font-medium text-sm border-transparent border-b-2 hover:border-indigo-500 hover:text-indigo-600"
                        href="#"
                        >
                        {{ tab }}
                    </a>
                </nav>
                <keep-alive>
                    <categories-edit-menu
                        v-if="panel_edit_active_tab === 'Categories'"
                        v-on:batchUpdated="emittedBatchUpdated()"
                    />
                    <types-edit-menu
                        v-else
                        v-on:batchUpdated="emittedBatchUpdated()"
                    />
                </keep-alive>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Add page slideout -->
    <div
        v-show="panel_add_page_open"
        class="fixed inset-0 overflow-hidden"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Overlay -->
        <div @click="toggleAddPagePanel()" class="absolute inset-0 bg-gray-900 opacity-50 transition-opacity cursor-pointer" aria-hidden="true"></div>

        <!-- Modal body wrapper -->
        <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div
            :class="panel_add_page_open ? 'translate-x-0' : 'translate-x-full'"
            class="w-screen max-w-md transform transition ease-in-out duration-500"
          >
            <div class="h-full flex flex-col py-4 bg-white shadow-xl overflow-y-scroll">
              <div class="px-4">
                <div class="flex items-center justify-between">

                  <!-- Title -->
                  <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">Add Page</h2>

                  <!-- Close button -->
                  <button @click="toggleAddPagePanel()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Close
                  </button>
                </div>
              </div>
              <!-- Content -->
              <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Form -->
                  <form class="space-y-6" action="#" method="POST">
                    <div>
                      <label for="title" class="block text-sm font-medium text-gray-700">
                        Page Title
                      </label>
                      <div class="mt-1">
                        <input v-model="new_page.title" name="title" type="text" required class="text-sm block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                      </div>
                    </div>

                    <div>
                      <label for="old_url" class="block text-sm font-medium text-gray-700">
                        Old URL
                      </label>
                      <div class="mt-1">
                        <input v-model="new_page.old_url" name="old_url" type="url" required class="text-sm block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                      </div>
                    </div>

                    <!-- Submit button -->
                    <button
                          v-if="!this.$route.query.category"
                          disabled
                          type="submit"
                          class="cursor-default w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                      Please select a Category
                    </button>
                    <button
                          v-else
                          @click.prevent="storePage()"
                          type="submit"
                          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                      Add Page
                    </button>
                  </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Page } from '@/types'
import PageService from '@/services/PageService.js'
import CategoriesEditMenu from '@/components/categories/CategoriesEditMenu.vue'
import TypesEditMenu from '@/components/types/TypesEditMenu.vue'

export default defineComponent({
    name: 'AppPages',

    components: {
        CategoriesEditMenu,
        TypesEditMenu
    },

    data() {
        return {
            // Pages
            pages: [] as Page[],

            // Pages table item
            title_editing: null,
            title_edited: '',

            // Edit panel
            panel_edit_open: false,
            panel_edit_tabs: ['Categories', 'Types'],
            panel_edit_active_tab: 'Categories',

            // Add page panel
            panel_add_page_open: false,
            new_page: {
                title: null,
                old_url: null,
                category_id: this.$route.query.category,
                type_id: 75
            },
        }
    },

    computed: {
        selectedPages() {
            return this.$store.state.selectedPages;
        }
    },

    watch: {
        '$route.query': {
            handler (query) {
                this.indexPages()
            },
            deep: true,
            immediate: true
        }
    },

    methods: {
        selectPage(page_id) {
            this.$store.commit('PUSH_SELECTED_PAGE', page_id)
        },

        clearSelectedPages() {
            this.$store.commit('CLEAR_SELECTED_PAGES')
        },

        toggleEditPanel() {
            this.panel_edit_open = !this.panel_edit_open
        },

        toggleAddPagePanel() {
            this.panel_add_page_open = !this.panel_add_page_open
        },

        indexPages(filters = this.$route.query) {
            PageService.index({
                params: {...filters}
            }).then(response => {
                this.pages = response.data;
            }).catch(error => {
                console.log(error);
            });
        },

        storePage() {
            PageService.store({
                title: this.new_page.title,
                old_url: this.new_page.old_url,
                category_id: this.$route.query.category,
                type_id: 75
            })
            .then(response => {
                this.indexPages()
                this.toggleAddPagePanel()
                this.new_page.title = null;
                this.new_page.old_url = null;
                this.new_page.type_id = 75;
            }).catch(error => {
                console.log(error);
            });
        },

        updatePage(page_id) {
            PageService.update(page_id, {
                title: this.title_edited,
            })
            .then(response => {
                setTimeout(function () {
                    this.indexPages()
                }.bind(this), 1000)
            }).catch(error => {
                console.log(error);
            });
        },

        emittedBatchUpdated() {
            this.indexPages()
            this.toggleEditPanel()
            this.clearSelectedPages()
        }
    },

    directives: {
        focus: {
          inserted(el) {
            el.focus()
          }
        }
    }
});
</script>

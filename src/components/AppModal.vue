<template>
    <div
        v-show="modalAddPageOpen"
        class="fixed z-10 inset-0 overflow-y-auto"
    >
      <div class="block min-h-screen p-0 text-center">
        <!-- Overlay -->
        <div
            @click="toggleAddPageModal()"
            :class="modalAddPageOpen ? 'opacity-100' : 'opacity-0'"
            class="fixed inset-0 transition-opacity ease-out duration-300"
        >
          <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <!-- Modal content -->
        <div
            :class="modalAddPageOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-0 scale-95'"
            class="inline-block align-middle max-w-4xl w-full bg-white rounded-lg p-8 my-8 text-left overflow-hidden shadow-xl transform transition-all ease-out duration-300" role="dialog" aria-modal="true" aria-labelledby="modal-headline"
        >
          <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Payment successful
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
                </p>
              </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              Deactivate
            </button>
            <button @click="toggleAddPageModal()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AppModal',

    data() {
        return {
            modalAddPageOpen: false
        }
    },

    methods: {
        toggleAddPageModal() {
            this.modalAddPageOpen = !this.modalAddPageOpen
        }
    }
});
</script>

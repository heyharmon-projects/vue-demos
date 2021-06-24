<template>
    <div class="space-y-1">
        <!-- <button @click="open = !open" href="#" class="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100" aria-current="page">
            <span class="truncate">Foo</span>
        </button>
        <div v-show="open" class="space-y-1">
            <a href="#" class="group w-full flex items-center pl-9 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                Bar
            </a>
        </div> -->
        <div @click="open = !open">
            <slot name="title"/>
        </div>
        <div v-show="open">
            <slot name="content"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppAccordion',

    data() {
        return {
            open: false
        }
    }
});
</script>

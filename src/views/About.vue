<template>
    <layout-default>
        <h1 class="text-2xl font-extrabold text-gray-900 mb-4">About</h1>
    </layout-default>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default defineComponent({
    name: 'About',

    components: {
        LayoutDefault
    }
});
</script>

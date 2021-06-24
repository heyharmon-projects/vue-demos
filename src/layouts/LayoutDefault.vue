<template>
    <div class="container max-width-lg margin-top-lg">
        <slot />
    </div>
</template>

<script lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'

export default {
    components: {
        AppSidebar
    }
};
</script>

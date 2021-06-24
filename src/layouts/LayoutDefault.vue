<template>
    <div class="h-screen flex overflow-hidden">
        <app-sidebar />
        <!-- Right content -->
        <!-- <div class="flex flex-col w-0 flex-1 overflow-hidden"> -->
            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8">
                    <slot />
                </div>
            </main>
        <!-- </div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppSidebar from '@/components/AppSidebar.vue'


export default defineComponent({
    name: 'LayoutDefault',

    components: {
        AppSidebar
    }
});
</script>

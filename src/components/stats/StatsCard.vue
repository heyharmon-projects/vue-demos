<template>
    <div class="stats-card bg radius-md padding-md shadow-xs col">
        <div class="flex items-center justify-between margin-bottom-xs text-sm">
            <p class="color-contrast-medium">{{ stat.label }}</p>
            <p class="color-success" v-if="metric">{{ stat.metric }}</p>
        </div>
        <p class="text-lg font-semibold color-contrast-higher">{{ stat.value }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StatsCard',

    props: {
        stat: {
            label: {
                type: String,
                required: true,
                default: 'Label'
            },
            value: {
                type: String,
                required: true,
                default: 'Value'
            },
            metric: {
                type: String,
                required: false
            }
        }
    }
});
</script>

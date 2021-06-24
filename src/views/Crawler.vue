<template>
    <layout-columns>

        <div class="margin-bottom-md">
          <h1 class="text-lg">Architecture</h1>
        </div>

        <app-tabs />

        <div class="module">
            <div class="grid gap-sm" style="width: 100%;">
                <stats-card
                    v-for="(stat, index) in stats"
                    :key="index"
                    :stat="stat"
                />
            </div>
        </div>

    </layout-columns>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutColumns from '@/layouts/LayoutColumns.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import StatsCard from '@/components/stats/StatsCard.vue'

export default defineComponent({
    name: 'Crawler',

    components: {
        LayoutColumns,
        AppTabs,
        StatsCard
    },

    data() {
        return {
            stats: [
                {
                    label: 'Status',
                    value: 'Idle'
                },
                {
                    label: 'Pages',
                    value: '0'
                },
                {
                    label: 'Queue',
                    value: '0 of 0 handled',
                    metric: '33.2%'
                }
            ]
        }
    }
});
</script>

<style lang="scss">
.module {
    display: flex;
}
</style>

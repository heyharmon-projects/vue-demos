<template>
    <layout-default>
        <h3 class="margin-bottom-sm">Home</h3>
        <app-tabs/>
        <app-list/>
    </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import AppList from '@/components/list/AppList.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'

export default {
    components: {
        LayoutDefault,
        AppList,
        AppTabs
    }
};
</script>

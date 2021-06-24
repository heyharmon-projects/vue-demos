<template>
    <div class="app">
        <app-header />

        <div class="app__wrapper">
            <app-sidebar />

            <main class="app__body">
                <slot/>
            </main>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
    components: {
        AppSidebar,
        AppHeader
    }
};
</script>

<style lang="scss" scoped>
/* --------------------------------
App
-------------------------------- */
.app {
    // background-color: var(--color-contrast-lower);
}

/* --------------------------------
App Wrapper
-------------------------------- */
.app__wrapper {
    display: flex;
}

/* --------------------------------
App Body
-------------------------------- */
.app__body {
    display: flex;
    flex-direction: column;
    width: 75rem;
    margin: 0 80px;
    position: relative;
    padding: var(--space-sm) var(--space-md) var(--space-sm) 0;
    min-height: calc(100vh - var(--app-ui-header-height));
    overflow: auto;
    z-index: 1;
}
</style>

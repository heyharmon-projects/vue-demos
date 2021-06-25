<template>
    <nav class="s-tabs">
        <ul class="s-tabs__list">
            <li>
                <router-link
                    :to="{ name: 'algolia' }"
                    :class="$route.name == 'algolia' ? 's-tabs__link--current' : ''"
                    class="s-tabs__link"
                >
                    Algolia
                </router-link>
            </li>
            <li>
                <router-link
                    :to="{ name: 'fuze' }"
                    :class="$route.name == 'fuze' ? 's-tabs__link--current' : ''"
                    class="s-tabs__link"
                >
                    Fuze
                </router-link>
            </li>
            <li>
                <router-link
                    :to="{ name: 'algolia-fuze' }"
                    :class="$route.name == 'algolia-fuze' ? 's-tabs__link--current' : ''"
                    class="s-tabs__link"
                >
                    Algolia + Fuze
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {}
</script>

<style media="screen">
:root {
    --s-tabs-border-bottom-width: 1px;
    --s-tabs-selected-item-border-bottom-width: 1px;
}
</style>

<style lang="scss" scoped>
.s-tabs {
    position: relative;
    margin-bottom: var(--space-md);
}

.s-tabs__list {
    display: flex;
    overflow: auto;
    -webkit-overflow-scrolling: auto;

    &::after { // border bottom
        content: '';
        position: absolute;
        width: 100%;
        height: var(--s-tabs-border-bottom-width);
        left: 0;
        bottom: 0;
        background-color: var(--color-contrast-low);
    }
}

.s-tabs__link {
    font-size: var(--text-sm);
    color: var(--color-contrast-medium);
    text-decoration: none;
    display: inline-block;
    padding: var(--space-xs) 0;
    margin: 0 var(--space-md) 0 0;
    white-space: nowrap;
    border-bottom: var(--s-tabs-selected-item-border-bottom-width) solid transparent;
    z-index: 1;
    transition: .2s;

    &:hover:not(.s-tabs__link--current) {
        color: var(--color-contrast-high);
    }
}

.s-tabs__link--current {
    position: relative;
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
}
</style>

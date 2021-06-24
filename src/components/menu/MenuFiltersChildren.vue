<template>
    <li class="menufilters__item menufilters__item--expanded">

        <!-- Link -->
        <a href="#0" class="menufilters__link _menufilters__link--current">
            <span class="menufilters__text">{{ category.title }}</span>
        </a>

        <!-- Arrow -->
        <button
            v-if="category.children.length"
            class="reset menufilters__sublist-control"
        >
            <svg class="icon" viewBox="0 0 12 12"><polygon points="4 3 8 6 4 9 4 3"/></svg>
        </button>

        <!-- Children -->
        <ul
            v-if="category.children.length"
            class="menufilters__list"
        >
            <menu-filters-children
                v-for="(category, index) in category.children"
                :key="index"
                :category="category"
            />
        </ul>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MenuFiltersChildren',

    props: {
        category: {}
    }
});
</script>

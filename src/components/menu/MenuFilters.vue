<template>
    <nav class="menufilters text-sm@md">
        <!-- Label -->
        <div class="menufilters__label margin-bottom-xxxs">
            <span class="text-sm color-contrast-medium">Main</span>
        </div>

        <ul class="menufilters__list">
            <menu-filters-children
                v-for="(category, index) in categories"
                :key="index"
                :category="category"
            />
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuFiltersChildren from '@/components/menu/MenuFiltersChildren.vue'

export default defineComponent({
    name: 'MenuFilters',

    components: {
        MenuFiltersChildren
    },

    props: {
        categories: {}
    }
});
</script>

<style media="screen">
:root {
  /* List items */
  /* Height of each list item (navigation links) */
  --menufilters-list-item-height: 32px;
  /* Item horizontal padding */
  --menufilters-list-item-padding-x: var(--space-sm);

  /* Sublist Control Arrow */
  /* Button size */
  --menufilters-sublist-control-size: 20px;
  /* Icon size */
  --menufilters-sublist-control-icon-size: 12px;
}
</style>

<style lang="scss">
.menufilters {}

// Children
.menufilters__list .menufilters__list {
  display: none; // hide children

  .menufilters__link { // child link
    padding-left: calc(var(--menufilters-list-item-padding-x) + var(--menufilters-list-item-padding-x));
  }
}

.menufilters__item {
  position: relative;
}

.menufilters__item--expanded { // show sublist
  .menufilters__list {
    display: block;
  }

  .menufilters__sublist-control .icon {
    transform: rotate(90deg);
  }
}

.menufilters__link {
  display: flex;
  align-items: center;
  height: var(--menufilters-list-item-height);
  margin-bottom: 8px;
  padding-left: var(--menufilters-list-item-padding-x);
  text-decoration: none;
  color: var(--color-contrast-high);
  transition: .1s;
  border-radius: 100px;

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.05);
  }
}

.menufilters__link--current {
  background-color: alpha(var(--color-primary), 0.1);
  color: var(--color-primary);
}

.menufilters__text { // link labels
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: var(--space-xxs);
}

.menufilters__sublist-control { // button (arrow) controlling the visibility of sub items
  display: block;
  width: var(--menufilters-sublist-control-size);
  height: var(--menufilters-sublist-control-size);
  border-radius: 50%;
  position: absolute;
  right: var(--space-xs);
  top: calc((var(--menufilters-list-item-height) - var(--menufilters-sublist-control-size))/2);
  cursor: pointer;
  transition: .1s;

  .icon { // arrow icon
    display: block;
    width: var(--menufilters-sublist-control-icon-size);
    height: var(--menufilters-sublist-control-icon-size);
    margin: auto;
    transition: transform .2s;
  }

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.15);
  }
}

.menufilters__label {
  padding-left: var(--menufilters-list-item-padding-x);
}

.menufilters__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-contrast-lower);
}
</style>

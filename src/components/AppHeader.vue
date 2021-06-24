<template>
    <header class="app-ui__header shadow-xs padding-x-md padding-x-0@md">
        <div class="app-ui__logo-wrapper padding-x-sm@md">
          <a href="#0" class="app-ui__logo">
            <svg width="104" height="30" viewBox="0 0 104 30">
              <path d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z" fill="var(--color-contrast-higher)" />
              <circle cx="15" cy="15" r="15" fill="var(--color-primary)" />
            </svg>
          </a>
        </div>

        <!-- (desktop-only) header menu -->
        <div class="display@md flex flex-grow height-100% items-center justify-between padding-x-sm">
          <form class="expandable-search text-sm@md">
            <!-- <button class="reset expandable-search__btn">
              <svg class="icon" viewBox="0 0 20 20">
                <title>Search</title>
                <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2">
                  <circle cx="8" cy="8" r="6" />
                  <line x1="12.243" y1="12.243" x2="18" y2="18" />
                </g>
              </svg>
            </button>
            <input class="reset expandable-search__input js-expandable-search__input" type="search" name="expandable-search" id="expandable-search" placeholder="Search..."> -->
          </form>

          <!-- Notifications -->
          <div class="flex gap-xxxxs">
            <a class="app-ui__header-btn js-tab-focus" href="#0">
              <svg class="icon" viewBox="0 0 20 20">
                <title>Notifications</title>
                <path d="M16,12V7a6,6,0,0,0-6-6h0A6,6,0,0,0,4,7v5L2,16H18Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" />
                <path d="M7.184,18a2.982,2.982,0,0,0,5.632,0Z" />
              </svg>

              <span class="app-ui__notification-indicator"></span>
            </a>
          </div>
        </div>
      </header>
</template>

<script>
export default {};
</script>

<style media="screen">
:root {
  --app-ui-header-height: 50px;

  /* --static = layout with header + sidebar + body */
  --app-ui-static-sidebar-width: 250px;
}
</style>

<style lang="scss" scoped>
.app-ui__header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  // background-color: var(--color-bg);
  background-color: var(--color-white);
  justify-content: space-between;
  height: var(--app-ui-header-height);
  z-index: 3;
}

// logo
.app-ui__logo-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  .app-ui__logo {
    display: block;
    width: 104px; // logo width
    height: 30px; // logo height

    svg {
      display: block;
      width: inherit;
      height: inherit;
    }
  }
}

.app-ui__body {
  position: relative;
  min-height: calc(100vh - var(--app-ui-header-height));
  z-index: 1;
  background-color: var(--color-contrast-lower);
}

// header buttons (e.g., notification, settings...)
.app-ui__header-btn,
.app-ui__user-btn {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-decoration: none; // reset
}

.app-ui__header-btn {
  display: flex;
  transition: background-color .3s;
  color: var(--color-contrast-high); // icon color

  .icon {
    font-size: 20px; // icon size
    display: block;
    margin: auto;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--color-contrast-lower);
  }
}

// notification indicator
.app-ui__notification-indicator {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  box-shadow: 0 1px 3px alpha(var(--color-accent), 0.4);
  border-radius: 50%;
}

// layout with header + sidebar + body
@include breakpoint(md) {
  .app-ui__logo-wrapper {
    width: var(--app-ui-static-sidebar-width);

    &::after { // right border
      content: '';
      position: absolute;
      right: 0;
      top: 15%;
      height: 70%;
      width: 1px;
      background-color: var(--color-contrast-lower);
    }
  }
}
</style>

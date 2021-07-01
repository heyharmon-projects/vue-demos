<template>
    <div class="fill-loader fill-loader--v1" role="alert">
        <div aria-hidden="true">
            <div class="fill-loader__base"></div>
            <div class="fill-loader__fill"></div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.fill-loader {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.fill-loader__fill {
  position: absolute;
}

// loader v1
.fill-loader--v1 {
  .fill-loader__base {
    width: 64px; // loader width
    height: 4px; // loader height
    background-color: var(--color-contrast-low);
  }

  .fill-loader__fill {
    background-color: var(--color-primary);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    will-change: transform;
  }
}

.fill-loader--v1 {
  .fill-loader__fill {
    animation: fill-loader-1 0.8s infinite var(--ease-in-out);
  }
}

@keyframes fill-loader-1 {
  0% {
    transform-origin: 0 0;
    transform: scaleX(0);
  }

  49% {
    transform-origin: 0 0;
    transform: scaleX(1);
  }

  51% {
    transform: scaleX(1);
    transform-origin: 100% 0;
  }

  100% {
    transform: scaleX(0);
    transform-origin: 100% 0;
  }
}
</style>

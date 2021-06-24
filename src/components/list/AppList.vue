<template>
    <ul class="notif text-sm">

      <li class="notif__item flex padding-sm">
          <figure class="notif__figure margin-right-xs color-primary" aria-hidden="true">
            <img src="/images/avatar.jpg" alt="user picture">
          </figure>

          <div class="flex-grow margin-right-xs">

            <div class="padding-top-xxxxs">
              <p><i class="font-semibold">Olivia Saturday</i> commented on your <i class="font-semibold">"This is all it takes to improve..."</i> post.</p>
              <p class="text-sm color-contrast-medium margin-top-xxxs"><time>1 hour ago</time></p>
            </div>
          </div>

          <div class="notif__dot margin-left-auto" aria-hidden="true"></div>
      </li>

      <li class="notif__item flex padding-sm">
          <figure class="notif__figure margin-right-xs color-primary" aria-hidden="true">
            <img src="/images/avatar.jpg" alt="user picture">
          </figure>

          <div class="flex-grow margin-right-xs">

            <div class="padding-top-xxxxs">
              <p><i class="font-semibold">Olivia Saturday</i> commented on your <i class="font-semibold">"This is all it takes to improve..."</i> post.</p>
              <p class="text-sm color-contrast-medium margin-top-xxxs"><time>1 hour ago</time></p>
            </div>
          </div>

          <div class="notif__dot margin-left-auto" aria-hidden="true"></div>
      </li>

      <li class="notif__item flex padding-sm">
          <figure class="notif__figure margin-right-xs color-primary" aria-hidden="true">
            <img src="/images/avatar.jpg" alt="user picture">
          </figure>

          <div class="flex-grow margin-right-xs">

            <div class="padding-top-xxxxs">
              <p><i class="font-semibold">Olivia Saturday</i> commented on your <i class="font-semibold">"This is all it takes to improve..."</i> post.</p>
              <p class="text-sm color-contrast-medium margin-top-xxxs"><time>1 hour ago</time></p>
            </div>
          </div>

          <div class="notif__dot margin-left-auto" aria-hidden="true"></div>
      </li>

    </ul>
</template>

<script>
export default {};
</script>

<style media="screen">
:root {
    --notif-figure-size: 30px;
}
</style>

<style lang="scss" scoped>
.notif {
  position: relative;
  z-index: 1;
}

.notif__item {
  cursor: pointer;
  transition: .1s;
  // border: 1px solid var(--color-contrast-low);
  border-bottom: 1px solid var(--color-contrast-low);
  // margin-bottom: var(--space-xs);

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.03);
  }
}

.notif__figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--notif-figure-size);
  height: var(--notif-figure-size);
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  > * {
    position: relative;
    z-index: 1;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before { // background
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    opacity: 0.15;
  }
}

.notif__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-primary);
  align-self: center;
  flex-shrink: 0;
}
</style>

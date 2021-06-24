<template>
    <nav class="sidenav sidenav--basic padding-y-sm">

        <ul class="sidenav__list margin-bottom-sm">
            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121"  viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><rect x="2" y="2" width="7" height="7" fill="none" stroke="#212121"></rect> <rect data-color="color-2" x="15" y="2" width="7" height="7" fill="none"></rect> <rect data-color="color-2" x="2" y="15" width="7" height="7" fill="none"></rect> <rect x="15" y="15" width="7" height="7" fill="none" stroke="#212121"></rect></g></svg>
                    <span class="sidenav__text">Home</span>
                    <!-- <span class="sidenav__counter">12 <i class="sr-only">notifications</i></span> -->
                </a>
            </li>

            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121"  viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><path data-color="color-2" d="M23,5V16a2,2,0,0,1-2,2H19v4l-6-4H12" fill="none"></path><path d="M17,2H3A2,2,0,0,0,1,4v8a2,2,0,0,0,2,2H5v5l7-5h5a2,2,0,0,0,2-2V4A2,2,0,0,0,17,2Z" fill="none" stroke="#212121"></path></g></svg>
                    <span class="sidenav__text">Chats</span>
                </a>
            </li>

            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121"  viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><path fill="none" stroke="#212121" d="M21.243,3.757 c-2.343-2.343-6.142-2.343-8.485,0c-0.289,0.289-0.54,0.6-0.757,0.927c-0.217-0.327-0.469-0.639-0.757-0.927 c-2.343-2.343-6.142-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L12,21.485l9.243-9.243C23.586,9.899,23.586,6.1,21.243,3.757z"></path></g></svg>
                    <span class="sidenav__text">Likes</span>
                </a>
            </li>

            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121"  viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><path d="M11,6.027C11.329,6.01,11.662,6,12,6c6.075,0,11,2.686,11,6s-4.925,6-11,6S1,15.314,1,12A4.475,4.475,0,0,1,3,8.565" fill="none" stroke="#212121"></path><path d="M17.973,13c.017-.329.027-.662.027-1,0-6.075-2.686-11-6-11S6,5.925,6,12s2.686,11,6,11a4.475,4.475,0,0,0,3.435-2" fill="none" stroke="#212121"></path><circle cx="12" cy="12" r="1" fill="none" data-color="color-2"></circle></g></svg>
                    <span class="sidenav__text">Other</span>
                </a>
            </li>
        </ul>

        <!-- <div class="sidenav__divider margin-y-xs" role="presentation"></div> -->

        <div class="sidenav__label margin-bottom-xxxs">
            <span class="text-sm color-contrast-medium">Account</span>
        </div>

        <ul class="sidenav__list">
            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121"  viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><path fill="none" stroke="#212121" d="M15,15H9 c-3.314,0-6,2.686-6,6v1c0,0,3.125,1,9,1s9-1,9-1v-1C21,17.686,18.314,15,15,15z"></path><path data-color="color-2" fill="none" d="M7,6c0-2.761,2.239-5,5-5 s5,2.239,5,5s-2.239,6-5,6S7,8.761,7,6z"></path></g></svg>
                    <span class="sidenav__text">Profile</span>
                </a>
            </li>

            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121" viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><circle data-color="color-2" cx="8" cy="12" r="3" fill="none"></circle><path d="M8,5h8a7,7,0,0,1,7,7h0a7,7,0,0,1-7,7H8a7,7,0,0,1-7-7H1A7,7,0,0,1,8,5Z" fill="none" stroke="#212121"></path></g></svg>
                    <span class="sidenav__text">Settings</span>
                </a>
            </li>
        </ul>

    </nav>
</template>

<script>
export default {}
</script>

<style media="screen">
:root {
  /* List items */
  /* Height of each list item (navigation links) */
  --sidenav-list-item-height: 36px;
  /* Item horizontal padding */
  --sidenav-list-item-padding-x: var(--space-md);

  /* Icons */
  /* Size of main link icons */
  --sidenav-icon-size: 16px;
  /* Gap between main icon and text label */
  --sidenav-icon-text-gap: 10px;
}
</style>

<style lang="scss" scoped>
.sidenav {
    min-width: 180px;
}

.sidenav__list .sidenav__list { // sublist
  display: none; // hide sublist

  .sidenav__link { // sublink
    padding-left: calc(var(--sidenav-list-item-padding-x) + var(--sidenav-sublist-control-size) + var(--sidenav-sublist-control-margin-right) + var(--sidenav-icon-size) + var(--sidenav-icon-text-gap));
  }
}

.sidenav__item {
  position: relative;
}

.sidenav__link {
  font-size: 16px;
  display: flex;
  height: var(--sidenav-list-item-height);
  align-items: center;
  padding: 0 var(--sidenav-list-item-padding-x) 0 calc(var(--sidenav-list-item-padding-x) + var(--sidenav-sublist-control-size) + var(--sidenav-sublist-control-margin-right));
  text-decoration: none;
  color: var(--color-contrast-high);
  transition: .2s;

  &:hover {
    // background-color: alpha(var(--color-contrast-higher), 0.05);
    color: var(--color-primary);

    svg * {
        stroke: var(--color-primary);
    }
  }
}

.sidenav__link--current {
  // background-color: alpha(var(--color-primary), 0.1);
  color: var(--color-primary);

  svg * {
      stroke: var(--color-primary);
  }
}

.sidenav__icon { // main item icons
  width: var(--sidenav-icon-size);
  height: var(--sidenav-icon-size);
  margin-right: var(--sidenav-icon-text-gap);
}

.sidenav__text { // link labels
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: var(--space-xxs);
}

.sidenav__counter {
  display: inline-block;
  background-color: alpha(var(--color-contrast-higher), 0.15);
  color: var(--color-contrast-high);
  font-size: var(--text-xs);
  padding: var(--space-xxxxs) var(--space-xxs);
  border-radius: 50em;
  margin-left: auto;
}

.sidenav__label {
  padding-left: var(--space-xs);
}

.sidenav__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-contrast-lower);
}

// --basic -> no sublists
.sidenav--basic {
  .sidenav__link, .sidenav__label {
    padding-left: var(--sidenav-list-item-padding-x);
  }
}

// --minified
.sidenav--minified {
  --sidenav-list-item-height: auto;

  .sidenav__list .sidenav__list {
    display: none !important; // hide sublists
  }

  .sidenav__link, .sidenav__label {
    padding-left: var(--sidenav-list-item-padding-x);
  }

  .sidenav__link {
    flex-direction: column;
    padding-top: var(--space-md);
    padding-bottom: var(--space-md);
  }

  .sidenav__icon {
    margin: 0 0 var(--sidenav-icon-text-gap);
  }

  .sidenav__text {
    padding: 0; // reset
  }

  .sidenav__counter, .sidenav__sublist-control {
    display: none; // hide counter and arrow icon
  }
}
</style>

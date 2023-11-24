<script lang="ts" setup>
import TheSidebarAdmin from '../components/TheSidebarAdmin.vue'
import TheMediaPLayer from '@/shared/components/TheMediaPLayer.vue'
</script>

<template>
  <div class="container columns is-clipped m-0">
    <nav class="navbar is-fixed-top box-shadow-y p-3">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger toggler"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <a href="#" class="navbar-item has-text-weight-bold has-text-black">
          Admin Dashboard
        </a>
        <a
          role="button"
          class="navbar-burger nav-toggler"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu has-background-white">
        <div class="navbar-start">
          <a href="#" class="navbar-item">
            <i class="fas fa-home icon"></i> Home
          </a>
          <a href="#" class="navbar-item"> About </a>
          <a href="#" class="navbar-item"> Features </a>
          <a href="#" class="navbar-item">Pricing</a>
        </div>
        <div class="navbar-end">
          <a href="#" class="navbar-item"> Notifications </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link"> Admin </a>
            <div class="navbar-dropdown is-right">
              <a href="#" class="navbar-item"> Profile </a>
              <a href="#" class="navbar-item">Settings</a>
              <hr class="navbar-divider" />
              <a href="#" class="navbar-item">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <TheSidebarAdmin />

    <main class="main">
      <RouterView />
    </main>

    <TheMediaPLayer />
  </div>

  <RouterView />
</template>

<style scoped lang="scss">
.container {
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
}

.px-1,
.p-1 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.py-1,
.p-1 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.box-shadow-y {
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
}

.menu-container {
  position: fixed;
  bottom: 0;
  margin: auto;
  min-width: 300px;
  z-index: 10;
  background-color: transparent;
  transform: translateX(-100%);
  transition: all ease 0.5s;
}

.menu-container.active {
  transform: translateX(0%);
}
.icon {
  height: 30px;
  width: 30px;
  vertical-align: baseline;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.toggler {
  margin-left: 0;
  cursor: pointer;
}

@media (min-width: 769px) {
  .menu-container {
    width: 25%;
    min-width: auto;
    transform: translateX(0%);
  }
}

@media (min-width: 1024px) {
  .menu-container {
    width: 16.6667%;
    min-width: auto;
    transform: translateX(0%);
  }
}
</style>

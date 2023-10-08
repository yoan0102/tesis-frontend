<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { mainMenu, customOptions } from '@/router/homeLinks'
</script>

<template>
  <aside class="menu pt-5 has-background-black-bis">
    <ul class="menu-list">
      <li>
        <router-link
          :to="item.router"
          v-for="item in mainMenu.defaultOptions"
          :key="item.router"
          class="is-flex is-align-items-center has-text-grey-light"
        >
          <Icon :icon="item.icon" class="is-size-3 mr-3" />
          {{ item.name }}</router-link
        >
      </li>
    </ul>
    <div class="side-bar__separator"></div>
    <ul class="menu-list">
      <li>
        <router-link
          :to="'/'"
          v-for="item in mainMenu.accessLink"
          :key="item.router"
          class="is-flex is-align-items-center has-text-grey-light"
        >
          <Icon :icon="item.icon" class="is-size-3 mr-3" />
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div class="separator"></div>
    <ul class="menu-list">
      <li>
        <router-link
          :to="'/'"
          v-for="item in customOptions"
          :key="item.router"
          class="is-flex is-align-items-center has-text-grey-light"
        >
          <Icon :icon="item.icon" class="is-size-3 mr-3" />
          <span class="is-size-6">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss"></style>

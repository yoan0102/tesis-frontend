<script lang="ts" setup>
import { Icon } from '@iconify/vue'

import { mainMenu } from '@/router/homeLinks'
import { useAuthStore } from '@/users/store/authStore'
import useLogin from '@/users/composables/useLogin'
import { RouterLink } from 'vue-router'
import { useTrackPlayed } from '../composables/useTrackPlayed'

const authStore = useAuthStore()
const { logout } = useLogin()

const onLogout = () => {
  logout()
}
const { resetTrackPay } = useTrackPlayed()
const onStopTrack = () => {
  resetTrackPay()
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo logo">
      <RouterLink to="/" class="logo__image">
        <h1>Vamos a cantar</h1>
      </RouterLink>
      <RouterLink to="/" class="logo__isotype">
        <span>V</span>
        <span>C</span>
      </RouterLink>
    </div>
    <div class="separator link--mobile-hide"></div>

    <ul class="navbar__container" v-if="mainMenu.defaultOptions.length > 0">
      <li
        class="link"
        v-for="item in mainMenu.defaultOptions"
        :key="item.router">
        <RouterLink :to="{ name: item.router.name }">
          <Icon :icon="item.icon" class="is-size-3" />
          <span class="link__text">{{ item.name }}</span>
        </RouterLink>
      </li>
    </ul>

    <div class="separator link--mobile-hide" v-if="authStore.user"></div>

    <ul
      class="navbar__container"
      v-if="mainMenu.accessLink.length > 0 && authStore.user">
      <li class="link" v-for="item in mainMenu.accessLink" :key="item.router">
        <RouterLink :to="{ name: item.router.name }">
          <Icon :icon="item.icon" class="is-size-3" />
          <span class="link__text">{{ item.name }}</span>
        </RouterLink>
      </li>
    </ul>

    <div class="separator link--mobile-hide" v-if="authStore.user"></div>

    <div class="navbar__container bottom">
      <template v-if="!authStore.user">
        <RouterLink :to="{ path: '/users/login' }" class="button is-primary"
          >Acceder</RouterLink
        >
        <RouterLink
          :to="{ name: 'register' }"
          class="button is-outlined is-primary"
          >Registrate</RouterLink
        >
      </template>
      <template v-else>
        <RouterLink
          v-if="authStore.user.role === 'Admin'"
          target="__blank"
          :to="{ name: 'admin-tracks' }"
          class="button is-primary"
          @click="onStopTrack"
          >Ir al Admin</RouterLink
        >
        <button
          :to="{ name: 'login' }"
          class="button is-outlined is-primary"
          @click="onLogout">
          Logout
        </button>
      </template>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: relative;
  overflow-x: auto;
}

.navbar::-webkit-scrollbar {
  display: none;
  /* width: 0px; */
}
.bottom {
  margin-top: 50px;
  display: flex;
  align-items: center;
}

.link__image--profile {
  border-radius: 50%;
  left: 0px;
}

.link__text {
  display: none;
}

.navbar {
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  border-bottom: 1px solid #8e8d8d;
  display: flex;
  gap: 15px;
  padding: 12px;

  .navbar__container {
    display: flex;
    gap: 10px;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .link--mobile-hide {
    display: none;
  }

  .navbar__logo .logo__image,
  .navbar__logo .logo__isotype {
    display: none;
  }

  .navbar__more {
    display: none;
  }
}

/* media Tablet 768 */
@media (min-width: 768px) {
  .navbar {
    position: inherit;
    width: auto;
    border-bottom: none;
    border-right: 1px solid #8e8d8d;
    flex-direction: column;
    align-items: center;

    .navbar__logo {
      display: flex;
      padding: 24px 0 0 0;

      .logo__isotype {
        display: flex;
      }
    }

    .navbar__container {
      flex-direction: column;
    }

    .navbar__more {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .link--mobile-hide {
      display: flex;
    }

    .link:hover {
      background-color: var(--primary);
      color: white;
      transition: 200ms;
      cursor: pointer;

      a {
        opacity: 1;
        color: white;
      }

      & .link__image {
        transition: 100ms;
        transform: scale(1.05);
      }
    }
  }
}

@media (min-width: 1200px) {
  .navbar {
    align-items: start;

    .navbar__logo {
      display: flex;
      padding: 24px 0 0 12px;

      .logo__image {
        display: flex;
      }

      .logo__isotype {
        display: none;
      }
    }
  }

  .link__text {
    display: block;
    padding-right: 50px;
  }
}
</style>
../composables/useHandleAuth

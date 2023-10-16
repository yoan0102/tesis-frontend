<script setup lang="ts">
import { ref } from 'vue'
// import { Icon } from '@iconify/vue';
// import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import useLogin from '../composables/useLogin';

const { onLogin } = useLogin()

const loginForm = ref<{ email: string; password: string }>({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: required
}



// const v$ = useVuelidate(rules, loginForm)

const onSubmit = async () => {
  await onLogin(loginForm.value.email, loginForm.value.password)
}

</script>

<template>
  <div class="box">
    <span class="borderLine"></span>
    <form @submit.prevent="onSubmit">
      <h2 class="title is-1">Acceder</h2>
      <div class="inputBox">
        <input type="text" v-model="loginForm.email" />
        <span>Email</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input type="password" v-model="loginForm.password" />
        <span>Contraseña</span>
        <i></i>
      </div>
      <div class="links">
        <a href="#">Cambiar Contraseña</a>
        <RouterLink :to="{ name: 'register' }">Signup</RouterLink>
      </div>

      <button type="submit" class="button flex justify-spacebettewn">
        <!-- <Icon v-if="authStore.isLoading" icon="mdi:search" class="is-size-3" /> -->
        <span>Acceder</span>
      </button>

      <!-- <button class="button" @click="refresh">Refresh</button> -->
    </form>
  </div>
</template>

<style scoped lang="scss">
.box {
  position: relative;
  width: 380px;
  height: 420px;
  background-color: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background-image: linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff);
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background-image: linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff);
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
  }

  .borderLine {
    position: absolute;
    top: 0;
    inset: 0;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  form {
    position: absolute;
    inset: 4px;
    background-color: #222;
    padding: 50px 40px;
    border-radius: 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;

    h2 {
      color: #fff;
      font-weight: 500;
      text-align: center;
      letter-spacing: 0.1rem;
    }

    .inputBox {
      position: relative;
      width: 300px;
      margin-top: 35px;

      input {
        position: relative;
        width: 100%;
        padding: 20px 10px 10px;
        background: transparent;
        outline: none;
        border: none;
        box-shadow: none;
        color: #23242a;
        font-size: 1em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        z-index: 10;

        &:valid~span,
        &:focus~span {
          color: #fff;
          font-size: 0.75em;
          transform: translateY(-34px);
        }

        &:valid~i,
        &:focus~i {
          height: 44px;
        }

        &[type='submit'] {
          border: none;
          outline: none;
          padding: 9px 25px;
          background-color: #fff;
          font-size: 0.9em;
          border-radius: 4px;
          font-weight: 600;
          width: 100px;
          margin-top: 10px;
          outline: 1px solid violet;

          &:active {
            opacity: 0.8;
          }
        }
      }

      span {
        position: absolute;
        left: 0;
        padding: 20px 0px 10px;
        pointer-events: none;
        color: #8f8f8f;
        font-size: 1em;
        letter-spacing: 0.05em;
        transition: 0.5s;
      }

      i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        transition: 0.5s;
        pointer-events: none;
      }
    }

    .links {
      display: flex;
      justify-content: space-between;

      a {
        margin: 10px 0;
        font-size: 0.75em;
        color: #8f8f8f;
        text-decoration: none;

        &:hover,
        &:nth-child(2) {
          color: #fff;
        }
      }
    }
  }
}
</style>

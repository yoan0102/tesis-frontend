<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const createTrack = reactive({
  name: '',
  album: '',
  artistName: '',
  nationality: '',
  nickname: '',
  artistCName: [],
  durationStart: 0,
  durationEnd: 270,
  gender: '',
  release_date: '',
  user_Id: '',
})

const rules = {
  name: {
    required: helpers.withMessage('El nombre es requerido', required),
  },
  album: {
    required: helpers.withMessage('El album es requerido', required),
  },
  artistName: {
    required: helpers.withMessage(
      'El nombre de artista es requerido',
      required
    ),
  },
  nationality: {
    required: helpers.withMessage('La nacionalidad es requerida', required),
  },
  durationEnd: {
    required: helpers.withMessage(
      'El tiempo final de la canción es requerido',
      required
    ),
  },
}

const v$ = useVuelidate(rules, createTrack)
const form = ref()
const onSubmit = async () => {
  if (!(await v$.value.$validate())) return
  const trackForm = new FormData(form.value)
  console.log(trackForm)
}
</script>

<template>
  <div class="is-flex is-justify-content-center is-align-items-center p-5">
    <div class="box">
      <span class="borderLine"></span>
      <form ref="form" @submit.prevent="onSubmit">
        <h2 class="title is-1">Upload Track</h2>
        <div class="is-flex is-justify-content-between bg-primary">
          <div class="inputBox mr-1">
            <input
              type="text"
              v-model="createTrack.name"
              @blur="v$.name.$touch" />
            <span>Email</span>
            <i></i>
          </div>

          <span v-if="v$.name.$error">
            <p
              class="has-text-danger mt-2"
              v-for="error in v$.name.$errors"
              :key="error.$uid">
              {{ error.$message }}
            </p>
          </span>

          <div class="inputBox">
            <input
              type="password"
              v-model="createTrack.album"
              @blur="v$.password.$touch" />
            <span>Contraseña</span>
            <i></i>
          </div>
        </div>
        <!-- <span v-if="v$.password.$error">
          <p
            class="has-text-danger mt-2"
            v-for="error in v$.password.$errors"
            :key="error.$uid">
            {{ error.$message }}
          </p>
        </span> -->
        <div class="links">
          <a href="#">Cambiar Contraseña</a>
          <RouterLink :to="{ name: 'register' }">Signup</RouterLink>
        </div>

        <button
          type="submit"
          class="button flex justify-spacebettewn is-primary">
          <Icon
            v-if="true"
            icon="mdi:content-save-plus"
            class="is-size-3 mr-3" />
          <span>Acceder</span>
        </button>

        <!-- <button class="button" @click="refresh">Refresh</button> -->
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  position: relative;
  width: 580px;
  height: 470px;
  background-color: #f3f3f3;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background-image: linear-gradient(
      0deg,
      transparent,
      transparent,
      #7d45ff,
      #7d45ff,
      #7d45ff
    );
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
    background-image: linear-gradient(
      0deg,
      transparent,
      transparent,
      #7d45ff,
      #7d45ff,
      #7d45ff
    );
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
    background-color: #fefefe;
    padding: 50px 40px;
    border-radius: 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;

    h2 {
      color: #000;
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
        border-bottom: 1px solid #00000025;
        box-shadow: none;
        color: #23242a;
        font-size: 1em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        z-index: 10;

        &:valid ~ span,
        &:focus ~ span {
          color: #000;
          font-size: 0.75em;
          transform: translateY(-34px);
        }

        &:valid ~ i,
        &:focus ~ i {
          height: 44px;
        }

        &[type='submit'] {
          border: none;
          outline: none;
          padding: 9px 25px;
          background-color: var(--primary);
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
          color: var(--primary);
        }
      }
    }
  }
}
</style>

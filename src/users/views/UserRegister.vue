<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import useRegister from '../composables/useRegister'
import { reactive } from 'vue'
import { email, helpers, minLength, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

const { onRegister } = useRegister()
const router = useRouter()

const registerForm = reactive({
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
})

const passwordChek = (value: string) => registerForm.password === value

const rules = {
  name: {
    required: helpers.withMessage('El nombre es requerido', required),
    minLength: helpers.withMessage(
      'El nombre debe tener al menos 4 caracteres',
      minLength(4)
    ),
  },
  email: {
    required: helpers.withMessage('El email es requerido', required),
    email: helpers.withMessage('El formato no es el de un email valido', email),
  },
  password: {
    required: helpers.withMessage('El password es requerido', required),
    minLength: helpers.withMessage(
      'El password debe tener al menos 6 caracteres',
      minLength(6)
    ),
  },
  passwordCheck: {
    required: helpers.withMessage('El password es requerido', required),
    passwordChek: helpers.withMessage(
      'La confirmación de la contraseña debe ser igual',
      passwordChek
    ),
  },
}

const v$ = useVuelidate(rules, registerForm)

const onSubmit = async () => {
  if (!(await v$.value.$validate())) return
  await onRegister(registerForm.name, registerForm.email, registerForm.password)
  // router.push({ name: 'home' })
}
</script>

<template>
  <div class="box">
    <span class="borderLine"></span>
    <form @submit.prevent="onSubmit">
      <h2 class="title is-1">Registrate</h2>
      <div class="inputBox">
        <input
          type="text"
          required
          v-model="registerForm.name"
          @blur="v$.name.$touch" />
        <span>Nombre</span>
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
          type="text"
          required
          v-model="registerForm.email"
          @blur="v$.email.$touch" />
        <span>Email</span>
        <i></i>
      </div>

      <span v-if="v$.email.$error">
        <p
          class="has-text-danger mt-2"
          v-for="error in v$.email.$errors"
          :key="error.$uid">
          {{ error.$message }}
        </p>
      </span>
      <div class="inputBox">
        <input
          type="password"
          required
          v-model="registerForm.password"
          @blur="v$.password.$touch" />
        <span>Contraseña</span>
        <i></i>
      </div>
      <span v-if="v$.password.$error">
        <p
          class="has-text-danger mt-2"
          v-for="error in v$.password.$errors"
          :key="error.$uid">
          {{ error.$message }}
        </p>
      </span>

      <div class="inputBox">
        <input
          type="password"
          required
          v-model="registerForm.passwordCheck"
          @blur="v$.passwordCheck.$touch" />
        <span>Confirmar Contraseña</span>
        <i></i>
      </div>
      <span v-if="v$.passwordCheck.$error">
        <p
          class="has-text-danger mt-2"
          v-for="error in v$.passwordCheck.$errors"
          :key="error.$uid">
          {{ error.$message }}
        </p>
      </span>
      <div class="links">
        <RouterLink :to="{ name: 'login' }">Signin</RouterLink>
      </div>

      <input type="submit" class="button" value="Registrar" />
    </form>
  </div>
</template>

<style scoped lang="scss">
.box {
  position: relative;
  width: 380px;
  height: 700px;
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
    background-image: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff
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
      #45f3ff,
      #45f3ff,
      #45f3ff
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
        &:valid ~ span,
        &:focus ~ span {
          color: #fff;
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
